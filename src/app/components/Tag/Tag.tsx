import React from 'react';
import styled from 'styled-components';

type TagProps = {
  tagList: string[];
};

function Tag({ tagList }: TagProps): JSX.Element {
  return (
    <TagList>
      {tagList.map((tag) => (
        <TagItem>{tag}</TagItem>
      ))}
    </TagList>
  );
}

export default Tag;

const TagItem = styled.li`
  background-color: green;
  color: white;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 8px;
`;

const TagList = styled.ul`
  list-style: none;
  display: flex;
  gap: 4px;
`;
