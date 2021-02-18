import React from 'react';
import './About.css'
import SearchIcon from '@material-ui/icons/Search'

function CardCert({logo, title, setSelectedImg}) {
    return (
        <div className="about__certCard" onClick={(e)=>setSelectedImg(logo)}>
            <img src={logo} alt=""/>
            <p>{title}</p>
        </div>

    )
}

export default CardCert
