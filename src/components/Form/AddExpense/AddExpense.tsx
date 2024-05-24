import  {useState} from 'react';
import styled from 'styled-components';
import { Input } from '../Input';
import { Button } from '@/components/Button';
import { DecimalInput } from '../DecimalInput';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox';
import { addExpenseService } from '@/service/addExpenseService';
import { UserProps } from '@/pages/Panel/PanelProps';
import { ButtonStyled } from '@/styled-components/button.styled';

interface AddExpenseFormProps  {
	closeModal?: () => void,
	token:string,
	datasheetId: number, 
	userList: UserProps[]
	updateList: ()=>void
}

const AddExpenseForm = ({datasheetId, userList, token, updateList, closeModal}:AddExpenseFormProps) => {

	const [concept, setConcept] = useState('')
	const [amount, setAmount] = useState('')
	const [payer, setPayer] = useState(userList[0]?.id)
	const [involved, setInvolved] = useState(userList.map((user) => { return {...user, checked:true}}))
	const [error, setError] = useState('')
	

	const handleSubmit = async (ev:React.FormEvent<HTMLFormElement>) => {

		const data = {
			datasheetId,
			concept,
			amount,
			payerId:payer,
			involved:involved.filter((user)=>user.checked===true).map((user) => user.id)
		}
	
		ev.preventDefault()

		try {
			await addExpenseService( data, token)
			updateList()
		closeModal&&closeModal()
		} catch (err) {
			console.log('error',datasheetId, concept, amount, payer, involved)
			setError('Error al conectar con la base de datos')
		}
		
	}
 
	return <AddExpenseStyle onSubmit={handleSubmit}>
		
		<Input type='text' name='concept' label='Concepto' handleChange={setConcept} inputValue={concept} required></Input>
		<DecimalInput name='amount' label='Cuantía' handleChange={setAmount} inputValue={amount} required></DecimalInput>
		<h4>Pagador</h4>
		<Select list={userList} handleChange={setPayer} value={payer} ></Select>
		<div className='usersCheckbox'>
			<h4>Involucrados</h4>
			<Checkbox list={involved}  setList={setInvolved}></Checkbox>
		</div>
		{error&&error}
		<ButtonStyled type='submit'>Añadir</ButtonStyled>
	</AddExpenseStyle>;
};

export const AddExpenseStyle = styled.form`
	padding: 24px 18px;
	width: 600px;
	max-width: 100%;
	background-color: white;

	& h4{
		margin-bottom: 12px;
	}

	& button[type="submit"] {
		display: block;
		margin-left: auto;
		margin-right: 0;
	}

	& .usersCheckbox{
		margin: 24px 0;

		
	}
`;

export default AddExpenseForm;
