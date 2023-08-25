// MainContent.js
import React from 'react';
import '../styling/MainContent.css';

function MainContent({ sections, selectedSection,  selectedUrl }) {
  const content = sections[selectedSection]?.content;

  return (
    <div className="main-content">
      {/* Render the iframe or the content based on selected URL */}
      {selectedUrl ? (
        <iframe src={selectedUrl} width="100%" height="500px" title="Embedded Content"></iframe>
      ) : (
        content
      )}
    </div>
  );
}

export default MainContent;
