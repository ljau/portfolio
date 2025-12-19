'use client';

import { createGlobalStyle } from 'styled-components';
import { theme } from '@/styles/theme';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
