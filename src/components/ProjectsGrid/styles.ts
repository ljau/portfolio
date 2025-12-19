import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  padding: 4rem 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
