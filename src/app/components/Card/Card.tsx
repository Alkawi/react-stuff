import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';

type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps): JSX.Element {
  return (
    <CardContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <Tag tagList={['JS', 'HTML']} />
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  background-color: red;
  color: white;
  display: grid;
  padding: 15px;
  border-radius: 12px;
  max-width: 500px;
  justify-items: center;
`;
