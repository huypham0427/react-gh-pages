import React from 'react';
import '../styling/SideNav.css';

// function SideNav({ sections, onSelectSection }) {
//   return (
//     <nav className="side-nav">
//       <ul>
//         {sections.map((section, index) => (
//           <li key={index}>
//             <button onClick={() => onSelectSection(index)}>{section.title}</button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

function SideNav({ sections, onSelectSection }) {
  return (
    <nav className="side-nav">
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <button onClick={() => handleSectionClick(index, section.title)}>{section.title}</button>
          </li>
        ))}
      </ul>
    </nav>
  );

  function handleSectionClick(index, title) {
    if (index === 7) {
      // Navigate to another web page
      window.location.href = 'https://signin.hitem.com/admin.php';
    } 
    else if (index === 8){
      window.location.href ='http://livemanex/releaseddocuments/';
    }
    else if (index === 2 && title === 'HiTEM App'){
      window.location.href ='http://192.168.199.132/';
    }
    else {
      onSelectSection(index);
    }
  }
}

export default SideNav;
