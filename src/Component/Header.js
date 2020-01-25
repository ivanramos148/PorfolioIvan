import React from 'react';
import './Styles/Header.scss';

var Header = () => {
  return(
    <div className="headerContent">
      <div className="row">
        <div className="col">
          <h1> My name is Ivan Ramos-Hernandez</h1>
          <h2>Full Stack Software Developer</h2>
        </div>
        <div className="col unorderlist">
          <ul>
            <li>Based in portland</li>
            <li>Based in portland</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
