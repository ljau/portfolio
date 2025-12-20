'use client';

import { Nav, NavLink } from './styles';

export default function Navbar() {
  return (
    <Nav>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#experience">Experience</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </Nav>
  );
}
