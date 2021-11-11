import React from 'react';
import styled from 'styled-components';

type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps): JSX.Element {
  return (
    <CardBody>
      <h2>{title}</h2>
      <p>{description}</p>
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
