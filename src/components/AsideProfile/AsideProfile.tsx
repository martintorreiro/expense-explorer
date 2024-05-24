import { AuthContext } from '@/context/AuthContext/AuthContext';
import { ButtonStyled } from '@/styled-components/button.styled';
import {useContext} from 'react';
import styled from 'styled-components';
import { Social } from '../Social';

const AsideProfile = () => {

	const {user} = useContext(AuthContext)

	return <AsideProfileStl>

		<div className='userInfo'>
			{user&&<img src={`http://192.168.1.14:3100/avatarImage/${user.avatar}`} alt='avatar' /> }
			<div>
				<h3>{user?.name}</h3>
				<ButtonStyled>Editar perfil</ButtonStyled>
			</div>
		</div>

		<div className="social">
			<Social/>

		</div>

		
	
	</AsideProfileStl>;
};

export const AsideProfileStl = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;

	& .userInfo{
		width: 100%;
		padding-bottom: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 16px;
		border-bottom: 0.8px solid var(--secondary-grey);

		& img{
			width: 160px;
			border-radius: 50%;
			border: 1px solid var(--secondary-grey);
		}
	}

	& .social{
		width: 100%;
	}


	& h3 {
		margin-bottom: 12px;
	}

	@media (min-width:700px) {
		flex-direction: row;
		justify-content: space-around;
		& .userInfo{
			border-bottom: none;
		}
	}

	@media (min-width: 1100px) {
		flex-direction: column;
		& .userInfo{
			border-bottom: 0.8px solid var(--secondary-grey);
			text-align: center;
			flex-direction: column;
			align-items: center;
		}
		
	}	

`;

export default AsideProfile;
