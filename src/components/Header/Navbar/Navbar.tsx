import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import UserNav from './UserNav/UserNav';
import { PublicNav } from '.';


export interface navInterface {
   children: JSX.Element | JSX.Element[]
}


const Navbar = () => {

    const {token} = useContext(AuthContext)
    return (<NavbarStyle>

        {!token&&<>
            <PublicNav />
        </>}
        
        {token&&<>
            <UserNav  />
        </>}

    </NavbarStyle>)

}


export const NavbarStyle = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
`;

export default Navbar;


