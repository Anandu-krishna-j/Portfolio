import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import ProjectPreview from './ProjectPreviews';
import { 
  CodeIcon, 
  CalendarIcon, 
  CheckCircleIcon, 
  ChevronRightIcon, 
  SparklesIcon, 
  ExternalLinkIcon 
} from './Icons';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'enterprise') return p.category === 'enterprise';
    if (activeFilter === 'personal') return p.category === 'personal';
    return true;
  });

  return (
    <section id="projects" className="section-modern-container" aria-label="Selected Projects">
      {/* Section Header */}
      <div className="section-intro text-center">
        <div className="section-pill-tag">
          <CodeIcon className="w-3.5 h-3.5 text-indigo mr-1.5" />
          <span>Proven Deliverables</span>
        </div>
        <h2 className="section-heading">
          Selected <span className="text-gradient-radiant">Projects</span>
        </h2>
        <p className="section-subheading">
          Real production systems, public infrastructure portals, AI monitoring interfaces, and full-stack solutions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-cluster">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`project-filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
        >
          All Projects ({projectsData.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('enterprise')}
          className={`project-filter-pill ${activeFilter === 'enterprise' ? 'active' : ''}`}
        >
          Enterprise & Production ({projectsData.filter(p => p.category === 'enterprise').length})
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('personal')}
          className={`project-filter-pill ${activeFilter === 'personal' ? 'active' : ''}`}
        >
          Personal Projects ({projectsData.filter(p => p.category === 'personal').length})
        </button>
      </div>

      {/* Projects Grid */}
      <div className="modern-projects-grid">
        {filteredProjects.map((project, idx) => (
          <article 
            key={project.id} 
            className={`modern-project-card ${idx % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'}`}
            onClick={() => setSelectedProject(project)}
            tabIndex="0"
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
            aria-label={`View details for ${project.title}`}
          >
            {/* Visual UI Preview Artwork */}
            <div className="project-preview-wrapper">
              <ProjectPreview projectId={project.id} title={project.title} />
            </div>

            {/* Card Mockup Top Bar */}
            <div className="project-card-topbar">
              <div className="topbar-window-dots">
                <span className="window-dot"></span>
                <span className="window-dot"></span>
                <span className="window-dot"></span>
              </div>
              <div className="topbar-meta">
                <span className="project-type-tag">{project.type}</span>
                <span className="project-year-tag">
                  <CalendarIcon className="w-3 h-3 inline mr-1 text-indigo" />
                  {project.year}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="project-card-main">
              <h3 className="modern-project-title">
                {project.title}
              </h3>

              <p className="modern-project-summary">
                {project.summary}
              </p>

              {/* Bullet highlights */}
              <ul className="modern-project-bullets">
                {project.bullets.slice(0, 2).map((bullet, bIdx) => (
                  <li key={bIdx} className="modern-bullet-item">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-indigo bullet-check-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
                {project.bullets.length > 2 && (
                  <li className="bullet-more-note">
                    +{project.bullets.length - 2} more technical highlight...
                  </li>
                )}
              </ul>

              {/* Technologies */}
              <div className="modern-project-tech-row">
                {project.technologies.slice(0, 5).map((tech, tIdx) => (
                  <span key={tIdx} className="modern-tech-pill">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="modern-tech-pill tech-pill-extra">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Card Action Footer */}
            <div className="project-card-action-bar">
              <span className="action-view-details">
                <span>View Project Details</span>
                <ChevronRightIcon className="w-4 h-4 ml-1 text-indigo inline" />
              </span>
              <span className="project-status-pill">{project.status}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
