import styled from 'styled-components';
import { Navbar } from '..';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

export type HeaderProps = {};

const Header = () => {
    return (
        <HeaderStyle>
            <div>
                <Link to='/'>
                    <Logo />
                </Link>

                <Navbar />
            </div>
        </HeaderStyle>
    );
};

export const HeaderStyle = styled.header`
    z-index: 20;
    background-color: var(--primary-blue);

    & > div {
        max-width: 1200px;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        padding: 10px 16px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export default Header;
