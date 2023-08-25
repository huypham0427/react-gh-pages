import React, {useState} from 'react';
import '../styling/NavBar.css';
import ProjectsDropdown from './ProjectsDropDown';
import DocumentsDropDown from './DocumentsDropDown';

function NavBar() {

  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [showDocsDropdown, setShowDocsDropdown] = useState(false);

  const handleProjectsHover = (show) => {
    setShowProjectsDropdown(show);
  };

  const handleDocsHover = (show) => {
    setShowDocsDropdown(show);
  };

  return (
    <nav className="navbar-nav">
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/news">NEWS</a></li>
        <li onMouseEnter={() => handleProjectsHover(true)} onMouseLeave={() => handleProjectsHover(false)}>
          <a href="">PRODUCTION</a>
          {showProjectsDropdown && <ProjectsDropdown />}
        </li>
        <li onMouseEnter={() => handleDocsHover(true)} onMouseLeave={() => handleDocsHover(false)}>
          <a href="/project">DOCUMENTS</a>
          {showDocsDropdown && <DocumentsDropDown />}
        </li>
        <li><a href="/timecard">TIME CARD</a></li>
        <li><a href="/forum">FORUM</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
