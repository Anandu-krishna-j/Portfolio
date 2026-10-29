import React, { useEffect } from 'react';
import ProjectPreview from './ProjectPreviews';
import { XIcon, CheckCircleIcon, SparklesIcon, CalendarIcon, LayersIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="modern-modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="modern-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modern-modal-header">
          <div className="modal-header-badges">
            <span className="modal-badge-type">{project.type}</span>
            <span className="modal-badge-year">
              <CalendarIcon className="w-3.5 h-3.5 inline mr-1 text-indigo" />
              {project.year}
            </span>
            <span className="modal-badge-status">{project.status}</span>
          </div>

          <button 
            type="button" 
            onClick={onClose} 
            className="modal-dismiss-btn"
            aria-label="Close project modal"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modern-modal-body">
          {/* Visual UI Preview in Modal */}
          <div className="modal-preview-wrapper mb-6">
            <ProjectPreview projectId={project.id} title={project.title} />
          </div>

          <h3 id="modal-project-title" className="modal-headline">
            {project.title}
          </h3>

          <p className="modal-narrative">
            {project.summary}
          </p>

          <div className="modal-subhead">
            <SparklesIcon className="w-4 h-4 text-indigo inline mr-2" />
            <span>Key Contributions & Technical Achievements</span>
          </div>

          <ul className="modal-highlights-list">
            {project.bullets.map((bullet, idx) => (
              <li key={idx} className="modal-highlight-item">
                <CheckCircleIcon className="w-4 h-4 text-indigo modal-check-icon" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="modal-subhead mt-6">
            <LayersIcon className="w-4 h-4 text-violet inline mr-2" />
            <span>Technologies & Libraries</span>
          </div>

          <div className="modal-tech-cloud">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="modern-tech-pill tech-pill-glow">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modern-modal-footer">
          <div className="modal-source-note">
            <span className="text-secondary">Source: </span>
            <span className="text-indigo">resume.pdf</span>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="btn-modern-primary"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
