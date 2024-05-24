import { KeyboardEvent } from 'react';
import styled from 'styled-components';

export interface InputProps  {
	type: 'text' | 'number' | 'email' | 'password' | 'tel',
	name:string,
	inputValue?:string|number,
	label?:string,
	placeholder?:string,
	required?:boolean,
	handleChange?: React.Dispatch<React.SetStateAction<string>>,
	handleKeyDown?: (ev:KeyboardEvent<HTMLInputElement>)=>void
}

interface LabelProps {
	hasInput: boolean;
  }

const Input = ({ type, name, label, placeholder, required=false, inputValue='', handleChange, handleKeyDown}:InputProps ) => {
	
	const changeFunction = (ev:React.FormEvent<HTMLInputElement>) => {
		if (handleChange) handleChange(ev.currentTarget.value)
	}

	const hasInput = () => {
		if(typeof inputValue === 'string'){
			return inputValue.length>0
		}else if(typeof inputValue === 'number'){
			return inputValue>0
		}
		return false
	}

		
	return <InputContainerStyle >
		{label&&<LabelStyle htmlFor={name} hasInput={hasInput()}>{label}</LabelStyle>}
		<InputStyle onKeyDown={handleKeyDown} type={type} name={name} id={name} placeholder={placeholder} value={inputValue} required={required} onChange={changeFunction}/>
	</InputContainerStyle>;
};

export const InputStyle = styled.input`
	width: 100%;
	outline: none;
	padding: 6px 12px;
	background-color: var(--light-grey);
	border: 0.4px solid var(--secondary-grey);
	border-radius: 4px;
	color: var(--primary-grey);
	font-size: 14px;
	&:focus {
  		outline: 2px solid var(--primary-blue);
		background-color: white;
	}
`;

export const LabelStyle = styled.label<LabelProps>`
	display: block;
	margin-bottom: 6px;
	
`

export const InputContainerStyle = styled.div`
	width: 100%;
  	
`



export default Input;
