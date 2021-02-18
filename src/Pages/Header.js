import React, {useState} from 'react';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu'
import Menu from './Menu'

function Header({color, active}) {

    const [selectedMenu, setSelectedMenu] = useState(null);

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__img">
                    <img src="logo.png" alt=""/>
                </div>
                {selectedMenu && <Menu setSelectedMenu={setSelectedMenu} color="white" active={active}/>}
                <div className={`header__menu ${color}`}>
                    <MenuIcon fontSize="large" onClick={()=>setSelectedMenu(true)}/>
                </div>
                <div className="header__icons">
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
            </div>
        </div>
    )
}

export default Header
