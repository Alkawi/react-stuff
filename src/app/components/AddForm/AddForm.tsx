import React from 'react';
import styled from 'styled-components';

export default function AddForm(): JSX.Element {
  return (
    <Form action="">
      <Label>
        Name: <input type="text" />
      </Label>
      <Label>
        Description: <input type="text" />
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
