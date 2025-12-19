import styled from 'styled-components';

export const Container = styled.section`
  min-height: calc(100vh - 64px); /* navbar height */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

export const Content = styled.div`
  max-width: 720px;
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.surface};
  margin-bottom: 2rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;

  a {
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  a:first-child {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;

    &:hover {
      opacity: 0.9;
    }
  }

  a.secondary {
    border: 1px solid ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;
