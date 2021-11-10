import React from 'react';
import styled from 'styled-components';
import Tags from '../Tags/Tags';

type CardProps = {
  title: string;
  description: string;
  tagList?: string[];
};

function Card({ title, description, tagList }: CardProps): JSX.Element {
  return (
    <CardBody>
      <h2>{title}</h2>
      <p>{description}</p>
      {tagList?.map((tag) => (
        <Tags>{tag}</Tags>
      ))}
    </CardBody>
  );
}

export default Card;

const CardBody = styled.div`
  background-color: red;
  color: white;
  display: grid;
  padding: 15px;
  border-radius: 12px;
  justify-items: center;
  margin: 20px;
`;
