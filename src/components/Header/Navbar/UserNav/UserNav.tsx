import styled from 'styled-components';
import { UserIcon } from '..';
import { UserMenu } from './UserMenu';
import { useState } from 'react';

const UserNav = () => {

	const [isOpen, setIsOpen] = useState(false)

	const openMenu = (ev:React.MouseEvent<HTMLButtonElement>) => {
		ev.stopPropagation()
		setIsOpen(true)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return <UserNavStyle id='prueba'>

		<button onClick={openMenu}><UserIcon /></button>
		
		{isOpen&&<UserMenu closeMenu={closeMenu}/>}
		

	</UserNavStyle>;
};



export const UserNavStyle = styled.div`
	& > button {
		background-color: transparent;
		border: none;
	}
`;

export default UserNav;