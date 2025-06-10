import React, {useState} from "react";
import About from './about.jsx';
import Portfolio from './portfolio.jsx';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    const [menuOpen, setMenuOpen]=useState(false);
    const [activeLink, setActiveLink]=useState("Home");

    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick=(name)=>{
        setActiveLink(name);
        setMenuOpen(false);
    }

    const navLinks=["Home", "About", "Portfolio", "Skills", "Contact"];

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navclass" id="home">
                <a className="navbar-brand" href="#home" onClick={() => handleLinkClick("Home")}>Vathsalya</a>
                <button class="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${menuOpen?"show":""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto" id="navLinks">
                        {navLinks.map((name, index)=>(
                            <li className="nav-item" key={index}><a className={`nav-link ${activeLink===name?"active":""}`} href={name==="Home" ? "#home" : `#${name.toLowerCase()}`} onClick={()=>handleLinkClick(name)}>{name}</a></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;