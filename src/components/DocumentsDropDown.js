import React from 'react';


function ProjectsDropdown({ show }) {
  return (
    <ul className={`dropdown-menu ${show ? 'show' : ''}`}>
      <li><a href="/projects/companydocs">Company Documents</a></li>
      <li><a href="/projects/productiondocs">Production Documents</a></li>
      {/* Add more projects as needed */}
    </ul>
  );
}

export default ProjectsDropdown;
