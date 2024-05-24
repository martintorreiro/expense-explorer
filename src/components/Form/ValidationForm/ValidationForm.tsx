import { NavForm } from '@/styled-components/navForm.styled.component';
import { Input } from '../Input';
import { validateService } from '@/service/validateService';
import { useState } from 'react';

const ValidationForm = (email) => {
	const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await validateService(email, inputCode);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      setError(error.message);
    }
  };

	return <NavForm onSubmit={handleSubmit}>
		<h3>Introduce el codigo de validación enviado a tu email</h3>
		<Input type='text' name="user" label="Usuario" required={true} handleChange={setUserName} inputValue={userName}/>
		{error&&<p>{error}</p>}
		{loading&&<p>cargando</p>}
		<button>Registrar</button>
		<button type='button' onClick={()=>setShowRegister(false)}>¿Ya tienes cuenta?</button>
	</NavForm>;
};

export default ValidationForm;
