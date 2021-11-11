import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tags from '../Tags/Tags';

type CardProps = {
  title: string;
  description: string;
  categories: string[];
};

function DetailCard({
  title,
  description,
  categories,
}: CardProps): JSX.Element {
  return (
    <CardBody>
      <Link to="/">Back</Link>
      <h2>{title}</h2>
      <p>{description}</p>
      {categories.map((tag) => (
        <Tags key={tag}>{tag}</Tags>
      ))}
    </CardBody>
  );
}

export default DetailCard;

const CardBody = styled.div`
  background-color: red;
  color: white;
  padding: 15px;
  border-radius: 12px;
  margin: 20px;
`;
