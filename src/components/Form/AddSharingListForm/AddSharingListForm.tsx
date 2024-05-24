import React, { useContext, useState, KeyboardEvent, useRef, useEffect} from 'react';
import styled from 'styled-components';
import { Input } from '../Input';
import useCreateDataSheet from '@/hooks/useCreateSharedExpenseSheet';
import { ErrorSubmit } from '../ErrorSubmit';
import { ButtonStyled } from '@/styled-components/button.styled';
import { AuthContext } from '@/context/AuthContext/AuthContext';


const AddSharingListForm = () => {

	const {user} = useContext(AuthContext)

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [currency, setCurrency] = useState('EUR')
	const [userError, setUserError] = useState(false)
	const [userToAdd, setUserToAdd] = useState('')
	const [users, setUsers] = useState<string[]>([])
	
	const { createSheet, loading, error } = useCreateDataSheet()
	
	

	const lista = useRef<HTMLUListElement>(null)

	const handleSubmit = async (ev:React.FormEvent) => {
		
		ev.preventDefault()
		if(user)users.unshift(user.name)
		await createSheet({title,description,currency}, users)
		
	}

	useEffect(()=>{
		if(lista.current)lista.current.scrollTop = lista.current.scrollHeight
	},[users])

	const addUser = () => {
		
		if(userToAdd.length>1){
			if(users.includes(userToAdd)){
				setUserError(true)
			}else{
				setUsers([...users, userToAdd])
				setUserToAdd('')
				setUserError(false)
			}
		}	
	}

	const deleteUser = (name:string) => {
		setUsers(prevUsers=>prevUsers.filter(val=>val!==name))
	}

	const handleKeyDown = (ev:KeyboardEvent<HTMLInputElement>) => {
		if(ev.key==='Enter'){
			ev.preventDefault()
			addUser()
		}
	}

	return <AddSharingListFormStyle onSubmit={handleSubmit}>
		<Input type='text' name="titulo" label="Título" required={true} handleChange={setTitle} inputValue={title}/>
		<Input type='text' name="descripcion" label="Descripción" handleChange={setDescription} inputValue={description}/>
		<Input type='text' name="badge" label="Moneda" required={true} handleChange={setCurrency} inputValue={currency}/>
		
		<div className='addUser'>

			<div className='addUser-list'>

				<h4>Lista de usuarios:</h4>
				<ul ref={lista}>
					<li>{user?.name} (Yo)</li>
					{users.map((user)=>{
						return <li key={user}>{user} <span onClick={()=>deleteUser(user)}>x</span></li>
					})}
				</ul>
				
			</div>
		
			<div className='addUser-input'>
				<Input type='text' name='user' label='Añadir usuario' handleChange={setUserToAdd} handleKeyDown={handleKeyDown} inputValue={userToAdd}/>
				<ButtonStyled type='button' onClick={addUser}>Añadir</ButtonStyled>
			</div>

			{userError&&<ErrorSubmit>El usuario indicado ya existe en la lista</ErrorSubmit>}

		</div>

		<ButtonStyled type='submit'>Crear hoja</ButtonStyled>

		{loading&&<p>cargando...</p>}
		{error&&<ErrorSubmit>{error}</ErrorSubmit>}

	</AddSharingListFormStyle>;
};

export const AddSharingListFormStyle = styled.form`

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-end;
	gap: 12px;


	& .addUser {
		padding: 18px 0;
		margin: 18px 0;
		width: 100%;
		border-top: 0.4px solid var(--secondary-grey);
		border-bottom: 0.4px solid var(--secondary-grey);
	}

	& .addUser-input{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 10px;
	}

	& .addUser-list{
		& > ul{
			max-height: 200px;
			overflow: auto;
			padding-right: 8px;
			& li{
				display: flex;
				justify-content: space-between;
				padding: 8px 12px;
				animation: fadeIn 0.4s ease-in-out forwards;
				border-radius: 4px;
			}
		}
	}

	& .userError {
		color: var(--primary-red);
	}

	& button[type="submit"] {
		margin-right: 0;
	}

	@keyframes fadeIn {
		from{
			background-color:var(--primary-green);
		}
		to{
			background-color:transparent;

		}
	}

	
`;

export default AddSharingListForm;
