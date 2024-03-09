import Card from './Card';
import TagButton from './TagButton';
import { CardContainer, ArrowIcon, ArrowContainer } from './common/Card';
import { Layout } from './common/Layout';
import { Title } from './common/Text';
import articlesData from '../mock/articles.json';
import { useCallback, useEffect, useState } from 'react';
import { MoreButtonStyled } from './common/Button';
import { filterDuplicateTags } from '../utils/filterDuplicateTags';

const ArticleComponent = () => {
  const [articles, setArticles] = useState<any>([]);
  const [tags, setTags] = useState<any>([]);
  const [loadCount, setLoadCount] = useState(6);

  useEffect(() => {
    loadArticles();
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setLoadCount(3);
    } else {
      setLoadCount(6);
    }
  };

  const loadArticles = () => {
    try {
      const filterTags = articlesData.map((tags: any) => tags.articleTag);
      const filterDuplicates = filterDuplicateTags(filterTags);
      setTags(filterDuplicates);
      setArticles(articlesData);
    } catch (error) {
      console.error('Error occurred in loadArticles:', error);
    }
  };


  const handleClick = () => {
    setLoadCount(loadCount + 3);
  };

  const handleTagClick = useCallback((tag: string) => {
    try {
      const filterTagArticle = articlesData.filter((article: any) =>
        article.articleTag.tag?.toLowerCase().includes(tag.toLowerCase())
      );
      setArticles(filterTagArticle);
    } catch (error) {
      console.error('Error occurred in handleTagClick:', error);
    }
  }, []);

  return (
    <Layout>
      <Title>The latest</Title>
      <div
        style={{
          marginBottom: '40px',
        }}
      >
        <TagButton onClick={handleTagClick} tags={tags}></TagButton>
      </div>
      {articles.length === 0 ? (
        <div style={{ textAlign: 'center' }}>Sorry, there are no articles.</div>
      ) : (
        <>
          <CardContainer>
            {articles.slice(0, loadCount).map((article: any, index: any) => (
              <Card key={index}>
                <img height={200} width="100%" alt={article.altText} src={article.articleImage} />
                <div style={{ padding: '1rem' }}>
                  <p style={{ color: '#6643b5', fontWeight: 'bold' }}>
                    {article.articleTag.label}
                  </p>
                  <h2 style={{ color: '#6643b5' }}>{article.articleTitle}</h2>
                  <p>{article.articleDescription}</p>
                </div>
                <ArrowContainer>
                  <ArrowIcon>
                    <a
                      style={{ textDecoration: 'none', color: '#E01D59' }}
                      href={article.articleLink.url}
                    >
                      &#10132;
                    </a>
                  </ArrowIcon>
                </ArrowContainer>
              </Card>
            ))}
          </CardContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <MoreButtonStyled onClick={handleClick}>
              More articles
            </MoreButtonStyled>
          </div>
        </>
      )}
    </Layout>
  );
};
export default ArticleComponent;
