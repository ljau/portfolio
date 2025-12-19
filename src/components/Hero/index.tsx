'use client';

import { Container, Content, Title, Subtitle, Actions } from './styles';
import Link from 'next/link';

export default function Hero() {
  return (
    <Container>
      <Content>
        <Title>
          Hi, I’m <span>Luis Jauregui</span>
        </Title>

        <Subtitle>
          Software Developer specialized in React, Next.js and React Native.
          I build clean, scalable and user-focused applications.
        </Subtitle>

        <Actions>
          <Link href="/projects">View Projects</Link>
          <Link href="/contact" className="secondary">
            Contact Me
          </Link>
        </Actions>
      </Content>
    </Container>
  );
}
