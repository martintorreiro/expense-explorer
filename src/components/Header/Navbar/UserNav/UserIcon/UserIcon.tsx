import { AuthContext} from '@/context/AuthContext/AuthContext';
import { useContext} from 'react';
import styled from 'styled-components';

const UserIcon = () => {

	const {user} = useContext(AuthContext)
	
	return <UserIconStyle >

		{user&&<span>{user.name}</span>}
		{user&&<img src={`http://192.168.1.14:3100/avatarImage/${user.avatar}`} alt='avatar' /> }
		
	</UserIconStyle>;
};

export const UserIconStyle = styled.div`
	
	border-radius: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	padding: 4px;
	background-color: rgba(255, 255, 255, 0.4);
	transition: all 0.4s ease;

	&:hover{
		background-color: rgba(255, 255, 255, 0.6);
		cursor: pointer;
	}

	& span {
		font-size: 14px;
		padding: 0 18px;
	}
	& img {
		height: 30px;
	}

`;

export default UserIcon;