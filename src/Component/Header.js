import React  from 'react'
import './Styles/Header.scss';

let Header = () =>{

  function sandwhichBlock(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return(
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active">Ivan Ramos-Hernandez</a>
      <span className="infoNav">
        <a href="#home">home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </span>
      <a href="#!" className="icon" onClick={sandwhichBlock}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  )
}
export default Header
