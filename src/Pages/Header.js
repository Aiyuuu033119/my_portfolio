import React, {useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu'
import Menu from './Menu'
import {useSpring, animated} from 'react-spring';

function Header({color, active}) {

    const header = useSpring({transform: 'translateY(0px)', from: {transform: 'translateY(-50px)'}})
    const menu= useSpring({transform: 'scale(1)', transition: 'all .s', from: {transform: 'scale(0)'}})

    const [selectedMenu, setSelectedMenu] = useState(null);

    return (
        <div className="header">
            <div className="header__container">
                <animated.div style={header} className="header__img">
                    <img src="logo.png" alt=""/>
                </animated.div>
                <Menu color="white" active={active} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/> 
                {/* {selectedMenu && <Menu setSelectedMenu={setSelectedMenu} color="white" active={active} />                } */}
                <animated.div style={menu} className={`header__menu ${color}`}>
                    <MenuIcon fontSize="large" onClick={()=>setSelectedMenu(true)}/>
                </animated.div>
                <animated.div style={header} className="header__icons">
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
                </animated.div>
            </div>
        </div>
    )
}

export default Header
