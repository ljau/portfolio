'use client';

import {
  Section,
  SectionTitle,
  Item,
  Role,
  Company,
  Description,
} from './styles';

export default function Experience() {
  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>

      <Item>
        <Role>Software Developer</Role>
        <Company>Magma Labs</Company>
        <Description>
          Worked on production React, Next.js and React Native applications,
          collaborating with cross-functional teams and mentoring junior developers.
        </Description>
      </Item>
    </Section>
  );
}
