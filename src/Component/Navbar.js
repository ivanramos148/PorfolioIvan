import React  from 'react'
import './Styles/Navbar.scss';

let Navbar = () =>{

  function sandwhichBlock(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  const galaxyOx = '<RAMOS />'
  return(
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active"> {galaxyOx} </a>
      <span className="infoNav">
        <a href="#about">
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About Me</a>
      </span>
      <a href="#!" className="icon" onClick={sandwhichBlock}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  )
}
export default Navbar
