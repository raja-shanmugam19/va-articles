import React, { memo } from 'react';
import { TagButtonStyled } from './common/Button';

type tagProps = {
  label: string;
  tag: string;
};
type TagButtonProps = {
  tags: tagProps[];
  onClick?: (tag: string) => void;
};

const TagButton: React.FC<TagButtonProps> = memo(({ tags, onClick }) => {
    console.log('calling here')
  const handleClick = (tag: string) => {
    if (onClick) {
      onClick(tag);
    }
  };

  return (
    <>
      {tags.map((tagObj, i) => (
        <TagButtonStyled key={i} onClick={() => handleClick(tagObj.tag)}>
          {tagObj.label}
        </TagButtonStyled>
      ))}
    </>
  );
});
export default TagButton;
