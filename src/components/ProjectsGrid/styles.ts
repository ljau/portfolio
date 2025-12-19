import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;
