'use client';

import { Nav, NavLeft, NavRight, NavLink, PortfolioLink } from './styles';

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav>
      <NavLeft>
        <PortfolioLink href="/">Portfolio</PortfolioLink>
      </NavLeft>
      <NavRight>
        <NavLink href="#home" onClick={scrollToTop}>Home</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavRight>
    </Nav>
  );
}
