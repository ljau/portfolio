import styled from 'styled-components';

export const Container = styled.nav`
  height: 64px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 600;

  a {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.95rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
