import React, { useState } from 'react';
import SideNav from './SideNav';
import MainContent from './MainContent';
import FileTable from './FileTable';
import '../styling/ProductionDocs.css'
import CustomerTable from './CustomerTable';
import phonelist from '../assets/phonelist.pdf';
import workhour from '../assets/WorkHours.pdf'
import PMAccount from '../assets/PMAccountAssignments.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import '../styling/CompanyDocs.css';
import EmployeeList from './EmployeeList.js'; 

function CompanyDocs() {
    const sections = [
        {
          title: 'Employee Phone List',
          content: (
            <div>
              <h2>Employee Phone List</h2>
              <iframe src={phonelist} width="100%" height="500px" title="Employee Phone List PDF"></iframe>
            </div>
          ),
        },
        {
          title: 'Employee List',
          content: (
            <div>
              <h2>Employee List</h2>
              <EmployeeList />
            </div>
          ),
        },
        // Add more sections as needed
        {
            title: 'Work Hours and Holidays',
            content: (
              <div>
                <h2>Work Hours and Holidays</h2>
                <iframe src={workhour} width="100%" height="500px" title="Work Hour PDF"></iframe>
              </div>
            ),
        },
        {
            title: 'PM Account Assignments',
            content: (
              <div>
                <h2>PM Account Assignments</h2>
                <iframe src={PMAccount} width="100%" height="500px" title="PM Account PDF"></iframe>
              </div>
            ),
        },
        {
            title: 'Form and Requests',
            content: (
              <div>
                <h2>Form and Requests</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faFile} className="icon" />
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            handleSelectSection(4, 'http://intranet/public/Forms%20and%20Requests/Human%20Resources/')
                        }
                        >
                        Human Resources
                        </button>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFile} className="icon" />
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            handleSelectSection(4, 'http://intranet/public/Forms%20and%20Requests/PM%20Department/')
                        }
                        >
                        PM Department
                        </button>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFile} className="icon" />
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            handleSelectSection(4, 'http://intranet/public/Forms%20and%20Requests/Purchasing%20Department/')
                        }
                        >
                        Purchasing Department
                        </button>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFile} className="icon" />
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            handleSelectSection(4, 'http://intranet/public/Forms%20and%20Requests/Sales%20Department/')
                        }
                        >
                        Sales Department
                        </button>
                    </li>
                </ul>  
              </div>
            ),
        },
        {
            title: 'Employee Benefits',
            content: (
              <div>
                <h2>Employee Benefits</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faFile} className="icon" />
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            handleSelectSection(5, 'http://intranet/public/Benefits/Applications/')
                        }
                        >
                        Application
                        </button>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFile} className="icon" />
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            handleSelectSection(5, 'http://intranet/public/Benefits/Benefit%20Summary/')
                        }
                        >
                        Benefits Summary
                        </button>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFile} className="icon" />
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            handleSelectSection(5, 'http://intranet/public/Benefits/Employee%20Saftey%20Handbook%202010.pdf')
                        }
                        >
                        Employee Safety Handbook 2010
                        </button>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFile} className="icon" />
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            handleSelectSection(5, 'http://intranet/public/Benefits/HITEM%20EMPLOYEE%20MANUAL%202019.pdf')
                        }
                        >
                        HiTEM Employee Manual 2019
                        </button>
                    </li>
                </ul>
              </div>
            ),
        },
        {
            title: 'Phone Manuals',
            content: (
              <div>
                <h2>Phone Manuals</h2>
                <ul>   
                    <li>
                        <FontAwesomeIcon icon={faFile} className="icon" />
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            handleSelectSection(5, 'http://intranet/public/Phone%20Manuals/Absent%20Message.pdf')
                        }
                        >
                        Absent Message
                        </button>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFile} className="icon" />
                        <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                            handleSelectSection(5, 'http://intranet/public/Phone%20Manuals/Phone%20Transfer.pdf')
                        }
                        >
                        Phone Transfer
                        </button>
                    </li>
                </ul>
              </div>
            ),
        },
        {
            title: 'Kiosk Adminstration',
            content: (
              <div>
                <h2>Kiosk Adminstration</h2>
              </div>
            ),
        },
        {
            title: 'Quality Documents',
            content: (
              <div>
                <h2>Quality Documents</h2>
              </div>
            ),
        },
      ];
    
      const [selectedSection, setSelectedSection] = useState(0);
      const [selectedUrl, setSelectedUrl] = useState(null);

    
      const handleSelectSection = (index, url) => {
        setSelectedSection(index);
        setSelectedUrl(url);
      };
    
      return (
        <div className="production-docs">
          <SideNav sections={sections} onSelectSection={handleSelectSection} />
          <MainContent sections={sections} selectedSection={selectedSection} selectedUrl={selectedUrl}/>
        </div>
      );
}

export default CompanyDocs