import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;

  height: 64px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  backdrop-filter: blur(8px);
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavLink = styled.a`
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.surface};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  /* underline animado */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const PortfolioLink = styled.a`
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.surface};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  /* underline animado */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
