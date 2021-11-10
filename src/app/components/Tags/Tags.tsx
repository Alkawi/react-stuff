import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type TagProps = {
  children: ReactNode;
};

function Tags({ children }: TagProps): JSX.Element {
  return <TagItem>{children}</TagItem>;
}

export default Tags;

const TagItem = styled.span`
  background-color: green;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
`;
