import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export default function AddForm(): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch('https://json-server.neuefische.de/stuff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });

    navigate('/');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Label>
      <Label>
        Description:{' '}
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Label>

      <Button type="submit" />
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  row-gap: 10px;
  background-color: blue;
  color: #e2e2e2;
  border-radius: 8px;
  padding: 20px;
`;

const Button = styled.input`
  border: 0;
  border-radius: 8px;
  background-color: lightblue;
  color: #2e2e2e;
  padding: 15px 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
