import * as React from 'react';
import styled from 'styled-components';

export const Footer = styled.footer`
  color: ${props => props.theme.subtext};
  font-size: 0.75rem;
  border-top: 1px solid ${props => props.theme.border};
`;
