import { LoginForm } from '@/components/Form/LoginForm';
import { Logo } from '@/components/Logo';
import React from 'react';
import styled from 'styled-components';

export interface LoginProps  {
}

const Login = ({}:LoginProps) => {
	return <LoginStl>

		<div>
			<Logo/>
			<h3>Inicia sesión y comienza a gestionar tus gastos</h3>
			<LoginForm />

			<div className='footer'><p>No estas registrado? <a href="/registro">Crea un cuenta</a></p></div>
		</div>
		
	</LoginStl>;
};

export const LoginStl = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: white;
	& > div {
		max-width: 340px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	& h3 {
		padding: 18px 0;
		font-size: 24px;
		text-align: center;
	}

	& .header{ 
		padding-top: 20px ;
		& img{
			height: 80px;
		}
	}

	& .footer {
		margin-top: 18px;
		padding: 20px 20px;
		width: 100%;
		

		& a {
			color: var(--primary-blue);
		}
	}
`;

export default Login;
