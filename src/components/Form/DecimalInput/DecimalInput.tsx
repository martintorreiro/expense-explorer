import React from 'react';
import { InputContainerStyle, InputStyle, LabelStyle } from '../Input/Input';

export type DecimalInputProps = {
	name:string,
	inputValue?:string,
	label:string,
	required?:boolean,
	handleChange?: React.Dispatch<React.SetStateAction<string>>
}

const DecimalInput = ({ name, label, required=false, inputValue='', handleChange}:DecimalInputProps ) => {
	
	const changeFunction = (ev:React.FormEvent<HTMLInputElement>) => {
		if (handleChange){
			const value = ev.currentTarget.value
			const normalizedValue = value.replace(',', '.');
			if (/^\d*\.?\d{0,2}$/.test(normalizedValue)) {
				handleChange(normalizedValue)
			}
		}
	}

	
	return <InputContainerStyle >
		<LabelStyle htmlFor={name} hasInput={inputValue.length>0}>{label}</LabelStyle>
		<InputStyle type='text' name={name} id={name} value={inputValue} required={required} onChange={changeFunction}/>
	</InputContainerStyle>;
};


export default DecimalInput;
