import React from 'react';
import './style.scss';
import logo from "../../Assets/logo.png";


const header = () => {
    
    return (
        <div className='header'>
           <img src={logo} alt="logo" className='header-logo'/>
           <div className='header-links'>
           <p>Accueil</p>
           <p className='header-link'>Températures</p>
           <p>Hydrométrie</p>
           <p>Hydrobiologie</p>
           </div>
        </div>
    );
};

export default header;