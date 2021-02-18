import React from 'react'
import './About.css'

function Modal({src,setSelectedImg}) {
    return (
        <div className="backdrop" onClick={(e) => setSelectedImg(null)}>
            <img src={src} alt=""/>
        </div>
    )
}

export default Modal
