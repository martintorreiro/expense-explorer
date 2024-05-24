import styled from 'styled-components';
import logo from '@/assets/images/EE.png'
const Logo = () => {
	return <LogoStyle >
		<img className="logo" src={logo} alt="logo"/>
	</LogoStyle>;
};

export const LogoStyle = styled.div`
display: flex;
justify-content: center;
	& img {
		display:block;
        height:38px;
	}
`;

export default Logo;
