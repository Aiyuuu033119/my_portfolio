import React, { useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close'

function Menu({active,selectedMenu,color,setSelectedMenu}) {
    

    return (
        <>
            <div className={`menu__Sidebar ${selectedMenu == null ? 'nonActive' : 'active'}`} >
            {/* <animated.div style={modal} className="menu__Sidebar" > */}
                <div>
                    <div onClick={()=>{setSelectedMenu(null)}}>
                        <CloseIcon fontSize="large"/>
                    </div>
                </div>
                <div>
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
                {/* <img src={src} alt=""/> */}
                
            </div>
        </>
        
    )
}

export default Menu
