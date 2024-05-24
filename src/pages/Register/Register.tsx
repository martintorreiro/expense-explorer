import { RegForm } from '@/components/Form/RegForm';
import { Logo } from '@/components/Logo';
import styled from 'styled-components';

export interface RegisterProps  {
}

const Register  = ({}) => {
	return <RegisterStl>
		<div>
			<div className='header'><Logo/></div>
			<h3>Todavía no estás registrado?</h3>
			<RegForm onSubmitOk={()=>console.log('enviado')}></RegForm>
		</div>
	</RegisterStl>;
};

export const RegisterStl = styled.section`
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
`;

export default Register;
