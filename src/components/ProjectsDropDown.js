import React from 'react';


function ProjectsDropdown({ show }) {
  return (
    <ul className={`dropdown-menu ${show ? 'show' : ''}`}>
      <li><a href="/projects/productiondocs">Customer Issuses Tracker</a></li>
      <li><a href="/projects/project2">Production Yields</a></li>
      {/* Add more projects as needed */}
    </ul>
  );
}

export default ProjectsDropdown;
