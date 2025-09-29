import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description of project 1.',
    image: 'https://via.placeholder.com/800x600?text=Project+1',
  },
  {
    title: 'Project 2',
    description: 'This is a description of project 2.',
    image: 'https://via.placeholder.com/800x600?text=Project+2',
  },
  {
    title: 'Project 3',
    description: 'This is a description of project 3.',
    image: 'https://via.placeholder.com/800x600?text=Project+3',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} onClick={() => setSelectedProject(project)} style={{ border: '1px solid #eaeaea', padding: '2rem', borderRadius: '5px', cursor: 'pointer' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', marginBottom: '1rem' }} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projects;
