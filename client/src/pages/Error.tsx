import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error: React.FC = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={img} alt='not found'></img>
                <h3>Ohh! Page Not Found</h3>
                <p>We can't seem to find the page you're looking for</p>
                <Link to='/'>back home</Link>
            </div>
        </Wrapper>
    );
};
export default Error;
