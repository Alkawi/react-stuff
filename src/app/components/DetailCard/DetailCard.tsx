import React from 'react';
import styled from 'styled-components';
import Tags from '../Tags/Tags';
import Button from '../Button/Button';

type CardProps = {
  title: string;
  description: string;
  tagList: string[];
};

function DetailCard({ title, description, tagList }: CardProps): JSX.Element {
  return (
    <CardBody>
      <h2>{title}</h2>
      <p>{description}</p>
      {tagList.map((tag) => (
        <Tags key={tag}>{tag}</Tags>
      ))}
      <Button>Back</Button>
    </CardBody>
  );
}

export default DetailCard;

const CardBody = styled.div`
  background-color: red;
  color: white;
  display: grid;
  padding: 15px;
  border-radius: 12px;
  justify-items: center;
  margin: 20px;
`;
