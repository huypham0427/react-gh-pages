// ProductionDocs.js
import React, { useState } from 'react';
import SideNav from './SideNav';
import MainContent from './MainContent';
import FileTable from './FileTable';
import '../styling/ProductionDocs.css'
import CustomerTable from './CustomerTable';

function ProductionDocs() {
  const sections = [
    {
      title: 'Customer Issuses Tracker',
      content: (
        <div>
          <h2>Customer Issuses Tracker</h2>
          <CustomerTable />
          
        </div>
      ),
    },
    {
      title: 'Production Documents',
      content: (
        <div>
          <h2>Production Documents</h2>
          <FileTable />
        </div>
      ),
    },
    // Add more sections as needed
    {
        title: 'HiTEM App',
        content: (
          <div>
            <h2>HiTEM App</h2>
            
          </div>
        ),
      },
  ];

  const [selectedSection, setSelectedSection] = useState(0);

  const handleSelectSection = (index) => {
    setSelectedSection(index);
  };

  return (
    <div className="production-docs">
      <SideNav sections={sections} onSelectSection={handleSelectSection} />
      <MainContent sections={sections} selectedSection={selectedSection} />
    </div>
  );
}

export default ProductionDocs;
