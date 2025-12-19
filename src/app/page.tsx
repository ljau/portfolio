'use client';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return <Title>Portfolio listo 🚀</Title>;
}
