import { NavForm } from '@/styled-components/navForm.styled.component';
import { Input } from '../Input';
import { useRegister } from '@/hooks/useRegister';
import { NavBarButton } from '@/components/Header/Navbar/NavBarButton';
import { ErrorSubmit } from '../ErrorSubmit';
import { useState } from 'react';

export interface regFormInterface {
	onSubmitOk: ()=>void
}


const RegForm = ({onSubmitOk}:regFormInterface) => {
	

	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { register, error, loading } = useRegister();

	const handleSubmit = async (e:React.FormEvent<HTMLElement>) => {
		e.preventDefault()

		await register(userName, email, password, onSubmitOk)

	}

	return <NavForm onSubmit={handleSubmit}>
		<Input type='email' name="email" label="Email" required={true} handleChange={setEmail} inputValue={email}/>
		<Input type='text' name="user" label="Usuario" required={true} handleChange={setUserName} inputValue={userName}/>
		<Input type='password' name="password" label="Contraseña" required={true} handleChange={setPassword} inputValue={password}/>
		{error&&<ErrorSubmit>{error}</ErrorSubmit>}
		{loading&&<p>cargando</p>}
		<NavBarButton>Registrar</NavBarButton>
	</NavForm>;
};


export default RegForm;
