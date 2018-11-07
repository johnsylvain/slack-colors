import * as React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  primary?: boolean;
};

export const Button = styled.button`
  font-size: 1em
  padding: 0.5em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  background: ${(props: ButtonProps) => props.primary && 'palevioletred'};
  color: ${(props: ButtonProps) => (props.primary ? 'white' : 'palevioletred')};

  &:hover {
    box-shadow: 0 4px 10px palevioletred
  }
`;
