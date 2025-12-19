'use client';

import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Grid, Wrapper, Title } from './styles';

export default function ProjectsGrid() {
  return (
    <Wrapper>
      <Title>Projects</Title>

      <Grid>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Wrapper>
  );
}
