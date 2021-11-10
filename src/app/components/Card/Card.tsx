import React from 'react';
import styled from 'styled-components';
import Tags from '../Tags/Tags';

type CardProps = {
  title: string;
  description: string;
  tagList: string[];
  detail?: boolean;
};

function Card({
  title,
  description,
  tagList,
  detail = false,
}: CardProps): JSX.Element {
  return (
    <CardBody>
      <h2>{title}</h2>
      <p>{description}</p>
      {detail ? <Tags tagList={tagList} /> : ''}
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
  max-width: 500px;
  justify-items: center;
`;
