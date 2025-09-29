import React from 'react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '5px', maxWidth: '800px' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} style={{ width: '100%', marginBottom: '1rem' }} />
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
