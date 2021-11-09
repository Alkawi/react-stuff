import type { ReactNode } from 'react';
import React from 'react';
import styles from 'styled-components';

type ButtonProps = {
  children: ReactNode;
};
function Button({ children }: ButtonProps): JSX.Element {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

const StyledButton = styles.button`
border-radius: 50%;
border: 1px solid orange;
background-color: green;
color: white;
padding: 0.8rem 2rem;
text-transform: lowercase;
`;
