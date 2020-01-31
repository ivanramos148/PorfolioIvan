import React from 'react';
import './Styles/Header.scss';

var Header = () => {
  return(
    <div className="headerContent">
      <div className="desktopMobile">
        <h3>Ivan Ramos-Hernandez</h3>
        <h3>Full Stack Software Developer</h3>
      </div>
      <div className="mobileText">
        <p>Ivan Ramos-Hernandez</p>
        <p>Full Stack Software Developer</p>
      </div>
    </div>
  )
}

export default Header
