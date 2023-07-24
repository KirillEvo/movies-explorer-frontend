import React from 'react'
import './Preloader.css'

const Preloader = ({ isOpen }) => {
    return (
      <div className={`modal-preload ${isOpen ? 'modal-preload_visible' : '' }`}>
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
      </div>
    )
};

export default Preloader
