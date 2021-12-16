import { useEffect, useState } from 'react';

export const TitleCounter = ({ content, name }) => {
  const [isPlural, setIsPlural] = useState(false);

  useEffect(() => {
    if (content) {
      setIsPlural(content.length > 1);
    }
  }, [content]);

  return (
    <>
      <p>
        <span>{content.length} </span>
        {isPlural ? `${name}s` : `${name}`} no grupo
      </p>
    </>
  );
};
