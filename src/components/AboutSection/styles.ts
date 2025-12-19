import styled from 'styled-components';

export const Container = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const Block = styled.div`
  margin-bottom: 3rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.surface};
  margin-bottom: 1rem;
`;

export const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  span {
    padding: 0.4rem 0.75rem;
    font-size: 0.85rem;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.08);
  }
`;
