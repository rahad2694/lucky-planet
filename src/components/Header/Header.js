import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav className='py-3 mb-2 nav-style sticky-top'>
            <h1 className='text-white'>Interplanetary spaceflight <FontAwesomeIcon icon={faRocket} /></h1>
            <small className='text-white'>Expedite with Convenience</small>
        </nav>
    );
};

export default Header;