import styled from 'styled-components';
import { v4 } from 'uuid';

export interface SelectProps  {
	value: number,
	list: {id:number, name:string}[],
	handleChange?: React.Dispatch<React.SetStateAction<number>>
}

const Select = ({list, value, handleChange}:SelectProps) => {
console.log('select')
	const handleSelect = (ev:any) => {
		
		handleChange&&handleChange(ev.target.value)
	}

	return <SelectStyle name='select' value={value} onChange={handleSelect}>
		
		{list.map((el)=><option value={el.id} key={v4()}>{el.name}</option>)}
		
		
	</SelectStyle>;
};

export const SelectStyle = styled.select`
	width: auto;
    outline: none;
    padding: 6px 12px;
    border: 1px solid var(--secondary-grey);
    border-radius: 4px;
    height: 38px;
	font-size: 14px;
    color: var(--primary-grey);
	background-color: white;

	& option{
		font-size: 16px;
	}

`;

export default Select;
