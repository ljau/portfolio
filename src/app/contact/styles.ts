import styled from 'styled-components';

export const Container = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 2.5rem;
`;

export const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    color: #4f46e5;
  }
`;
