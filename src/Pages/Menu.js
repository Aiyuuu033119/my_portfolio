import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


function Menu({active,setSelectedMenu,color}) {
    console.log(active);
    return (
        <div className="menu__Sidebar" onClick={(e) => setSelectedMenu(null)}>
            {/* <img src={src} alt=""/> */}
            <div className={"header__button " + color +" " + (active == 'home' ? ('active') : (''))} >
                <Link to="/" className={color}>Home</Link>
            </div>
            <div className={"header__button " + color +" " + (active == 'about' ? ('active') : (''))}>
                <Link to="/about" className={color}>About</Link>
            </div>
            <div className={"header__button " + color +" " + (active == 'project' ? ('active') : (''))}>
                <Link to="/projects" className={color}>Projects</Link>
            </div>
            <div className={"header__button " + color +" " + (active == 'contact' ? ('active') : (''))}>
                <Link to="/contacts" className={color}>Contacts</Link>
            </div>
        </div>
    )
}

export default Menu
