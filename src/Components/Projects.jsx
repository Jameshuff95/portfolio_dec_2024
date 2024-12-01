import { useState } from 'react';
import '../src/index.css';
import '../CSS/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project1',
      img: '#',
      alt: 'alt 1',
      description: 'Project description 1',
      type: '1',
    },
    {
      title: 'Project2',
      img: '#',
      alt: 'alt 2',
      description: 'Project description 2',
      type: '2',
    },
    {
      title: 'Project3',
      img: '#',
      alt: 'alt 3',
      description: 'Project description 3',
      type: '3',
    },
  ];

  Object.freeze(projects);

  const [filter, setFilter] = useState('');

  const filterProjects = () => {
    if (filter === '') {
      return projects;
    }
    return projects.filter((project) => project.type === filter);
  };

  const filteredProjects = filterProjects();

  return (
    <section className="section">
      <>
        <div id="filter_container">
          <p>Filter by type:</p>
          <select
            id="project_filter"
            aria-label="project filter dropdown"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option className="filter_option" value="">
              All
            </option>
            <option className="filter_option" value="1">
              Type 1
            </option>
            <option className="filter_option" value="2">
              Type 2
            </option>
            <option className="filter_option" value="3">
              Type 3
            </option>
          </select>
        </div>
      </>
      <ul className="container">
        {filteredProjects.map((project) => {
          return (
            <li className="projectCard" key={project.title}>
              <div id="projectTop">{project.title}</div>
              <div id="projectBottom">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="project_thumbnail"
                />
                <p id="project_description">{project.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
