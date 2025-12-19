'use client';

import { Project } from '@/data/projects';
import { Card, Title, Description, Stack, Links } from './styles';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
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
