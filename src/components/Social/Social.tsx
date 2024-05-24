import { ButtonStyled } from '@/styled-components/button.styled';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Friend{
	name:string,
	avatar:string
}


const Social = () => {
	const [friendList, setFriendList] = useState<Friend[]>([])

	useEffect(()=>{

	},[])

	return <SocialStl>
		<h3>Lista de amigos</h3>
		
		{friendList.length>1?
			<ul>{friendList.map((friend)=>
				<li>
					<img src={`http://192.168.1.14:3100/avatarImage/${friend.avatar}`} alt="" />
					<span>{friend.name}</span>
				</li>)
			}</ul>:
			<span>Todabía no tienes amigos.</span>
		}
		
		
		<ButtonStyled>Agregar</ButtonStyled>
	</SocialStl>;
};

export const SocialStl = styled.div`
	& span{
		display: block;
		padding: 12px 0;
	}
`;

export default Social;
