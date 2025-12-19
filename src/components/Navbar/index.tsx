'use client';

import Link from 'next/link';
import { Container, Logo, NavLinks } from './styles';

export default function Navbar() {
  return (
    <Container>
      <Logo>
        <Link href="/">Inicio</Link>
      </Logo>

      <NavLinks>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </NavLinks>
    </Container>
  );
}
