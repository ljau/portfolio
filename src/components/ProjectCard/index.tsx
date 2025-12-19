'use client';

import { Project } from '@/data/projects';
import { Card, Title, Description, Stack, Links } from './styles';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>

      <Stack>
        {project.stack.map(tech => (
          <span key={tech}>{tech}</span>
        ))}
      </Stack>

      <Links>
        {project.github && (
          <a href={project.github} target="_blank">
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank">
            Live Demo
          </a>
        )}
      </Links>
    </Card>
  );
}
