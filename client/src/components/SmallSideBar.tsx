import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';
import NavLinks from './NavLinks';
import { RootState } from '../store';

const SmallSidebar: React.FC = () => {
    const { isSidebarOpen } = useSelector((store: RootState) => store.user);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleSidebar());
    };
    return (
        <Wrapper>
            <div
                className={
                    isSidebarOpen
                        ? 'sidebar-container show-sidebar'
                        : 'sidebar-container'
                }
            >
                <div className='content'>
                    <button className='close-btn' onClick={toggle}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks toggleSidebar={toggle} />
                </div>
            </div>
        </Wrapper>
    );
};
export default SmallSidebar;
