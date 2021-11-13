import React from 'react';
import styled from 'styled-components';

type DeleteButtonProps = {
  deleteCard: () => void;
};

export default function DeleteButton({
  deleteCard,
}: DeleteButtonProps): JSX.Element {
  return <Button onClick={deleteCard}>x</Button>;
}

const Button = styled.button`
  background-color: yellowgreen;
  color: white;
  border-radius: 7.34px;
  border: none;
  padding: 20px;
`;
