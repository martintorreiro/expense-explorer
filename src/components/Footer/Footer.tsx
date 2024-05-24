import styled from 'styled-components';
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Footer  = () => {
	return <FooterStl>

		<div>
			<ul>
				<li><Link to='#'><FiGithub/></Link></li>
				<li><Link to='#'><FiLinkedin/></Link></li>
				<li></li>
			</ul>
			<ul>
				<li><Link to='#'>Contacto</Link></li>
				<li><Link to='#'>Condiciones y términos de uso</Link></li>
			</ul>
		</div>

		

	</FooterStl>;
};

export const FooterStl = styled.div`
	background-color: var(--light-grey);
	
	
	& > div {
		padding: 10px 20px;
		margin: 0 auto;
		max-width: 1440px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid var(--secondary-grey);

		& > ul {
			display: flex;
			gap: 16px;
			&  a {
				display: block;
				padding: 6px 12px;
				font-size: 14px;
			}
		}
	}
	
`;

export default Footer;
