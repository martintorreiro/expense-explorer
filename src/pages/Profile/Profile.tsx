import { MyDataList } from '@/components/MyDataList';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import { useContext } from 'react';
import styled from 'styled-components';

const Profile = () => {
	
	const { token } = useContext(AuthContext);
	
	return <ProfileStyle id='perfil'>
		
		{token&&<MyDataList  />}
		
	</ProfileStyle>;
};

export const ProfileStyle = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export default Profile;
