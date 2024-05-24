import { Input } from '../Input';
import google  from '@/assets/images/google.png'
import useLogin from '@/hooks/useLogin';
import { NavForm } from '@/styled-components/navForm.styled.component';
import { ErrorSubmit } from '../ErrorSubmit';
import { NavBarButton } from '@/components/Header/Navbar/NavBarButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const LoginForm = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	console.log(password)

	const { login, error, loading } = useLogin()

	const handleSubmit = async (e:React.FormEvent<HTMLElement>) => {
		e.preventDefault()
	
		await login(email,password)
		
		
	}
	
	return <NavForm onSubmit={handleSubmit}>
		<Link to='/login'>login</Link>
		<Input type='text' name="user" label="Usuario o email" required={true} handleChange={setEmail} inputValue={email}/>
		<Input type='password' name="password" label="Contraseña" required={true} handleChange={setPassword} inputValue={password}/>
        {error&&<ErrorSubmit>{error}</ErrorSubmit>}
		{loading&&<p>cargando</p>}
		<NavBarButton>Inicia sesión</NavBarButton>
        <NavBarButton type='button'><img src={google}/><span>Iniciar con Google</span></NavBarButton>
	</NavForm>;
};

export default LoginForm;
