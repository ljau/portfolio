'use client';

import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Grid, Wrapper, Title } from './styles';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ProjectsGrid() {
  return (
    <Wrapper
      as={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Title>Projects</Title>

      <Grid>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Wrapper>
  );
}
