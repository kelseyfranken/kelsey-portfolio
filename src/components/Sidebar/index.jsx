import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './sidebar.css';
import { sidebarData } from './sidebarData';

function Sidebar(props) {

  return (
    <nav id='sidebar' className='sidebar'>
      {sidebarData.map((section, index)=>{
        return (
          <div key={index} className='sidebar-element-container'>
          <HashLink smooth to={section.path}>
          <span>{section.name}</span>
          </HashLink>
          </div>
        )
      })}
    </nav>
  );
}

export default Sidebar;