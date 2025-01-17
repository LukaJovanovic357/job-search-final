import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const BigSidebar: React.FC = () => {
    const { isSidebarOpen } = useSelector((store: RootState) => store.user);

    return (
        <Wrapper>
            <div
                className={
                    isSidebarOpen
                        ? 'sidebar-container '
                        : 'sidebar-container show-sidebar'
                }
            >
                <div className='content'>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
};
export default BigSidebar;
