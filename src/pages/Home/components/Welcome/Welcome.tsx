import styled from 'styled-components';
import travel from '@/assets/images/grupo-amigos-saltando-cima-colina.jpg'



const Welcome = () => {
	return <WelcomeStyle >
				<div>
					<h2>Organiza los gastos con tus compañeros</h2>
					<p>La vida está llena de momentos compartidos, desde viajes emocionantes hasta cenas acogedoras o simplemente el día a día con tus compañeros de piso. Con tantas experiencias compartidas, mantener un control claro de quién pagó qué y quién debe cuánto puede volverse complicado. Pero no te preocupes, estamos aquí para simplificar esa dinámica y ahorrar tiempo en cálculos complicados.</p>
				</div>
			</WelcomeStyle>;
};

export const WelcomeStyle = styled.div`
	background-image: url(${travel});
	height:100vw;
	max-height:100vh;
	background-size:cover;
	background-position:center bottom;
	position:relative;

	& > div {
		position:absolute;
		top:80px;
		left:60px;
	}
`;

export default Welcome;
