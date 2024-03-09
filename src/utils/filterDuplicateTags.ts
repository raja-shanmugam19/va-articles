type tagProps = {
    label: string;
    tag: string;
  };
  
export const filterDuplicateTags = (tags: tagProps[]) => {
    try {
      const ids = tags.map(({ label }) => label);
      const filtered = tags.filter(
        ({ label }, index: any) => !ids.includes(label, index + 1)
      );
      return filtered;
    } catch (error) {
      console.error('Error occurred in filterDuplicateTags:', error);
      return tags;
    }
  };