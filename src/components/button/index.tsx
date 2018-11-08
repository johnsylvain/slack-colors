import * as React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  primary?: boolean;
  theme: any;
};

export const Button = styled.button`
  font-size: 1em
  padding: 0.5em 1em;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  background: ${(props: ButtonProps) => props.primary && props.theme.primary};
  color: ${(props: ButtonProps) =>
    props.primary ? 'white' : props.theme.primary};

  &:hover {
    box-shadow: 0 4px 10px ${props => props.theme.primary}
  }
`;
