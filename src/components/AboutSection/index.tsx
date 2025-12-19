'use client';

import { Container, Title, Text, Stack, Block } from './styles';

export default function AboutSection() {
  return (
    <Container>
      <Title>About Me</Title>

      <Block>
        <Text>
          I am a Software Developer focused on building high-quality web and
          mobile applications using React, Next.js, and React Native.
        </Text>

        <Text>
          I enjoy working on products where clean architecture, performance,
          and user experience matter. I have experience collaborating on
          production projects and building apps from scratch.
        </Text>
      </Block>

      <Block>
        <Title as="h2">Tech Stack</Title>

        <Stack>
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>React Native</span>
          <span>Styled Components</span>
          <span>Firebase</span>
        </Stack>
      </Block>
    </Container>
  );
}
