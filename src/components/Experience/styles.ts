import styled from 'styled-components';

export const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
`;

export const Role = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Company = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.surface};
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  max-width: 700px;
`;
