import { AddSharingListForm } from '@/components';
import styled from 'styled-components';
import {BoxContainerStyle} from '@/styled-components/boxContainer.styled'


const CreateSheet  = () => {

	

	return <CreateSheetStl>

		<div className='container'>
			<h1>Crear una nueva hoja</h1>
			<p>Con solo unos pocos clics, podrás agregar gastos, asignarlos a los participantes y calcular automáticamente las contribuciones de cada uno.</p>
			<BoxContainerStyle>
				<AddSharingListForm />
			</BoxContainerStyle>
			
		</div>
		
	</CreateSheetStl>;
};

export const CreateSheetStl = styled.section`
	background-color:var(--light-grey);
	padding: 42px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100%;
	& .container {
		width: 100%;
		max-width: 600px;
		padding: 0 16px;
	}

	& h1{
		font-weight: 400;
		margin-bottom: 8px;
	}

	& p{
		font-size: 14px;
	}
`;

export default CreateSheet;
