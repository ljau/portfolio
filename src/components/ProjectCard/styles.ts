import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.article)`
  padding: 1.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.surface};
  margin-bottom: 1rem;
`;

export const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  span {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;

  a {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
