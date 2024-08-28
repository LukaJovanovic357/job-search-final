import React from 'react';
import logo from '../assets/images/result.svg';

const Logo: React.FC = () => {
    return (
        <img
            src={logo}
            style={{ height: '100px', marginTop: '20px' }}
            alt='job-finder logo'
            className='logo'
        />
    );
};

export default Logo;
