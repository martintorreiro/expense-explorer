import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

export interface ItemProps {
	id:number, name:string, checked:boolean
}

export interface CheckboxProps {
	list: ItemProps[],
	setList: React.Dispatch<React.SetStateAction<ItemProps[]>>
}

const Checkbox = ({ list, setList }:CheckboxProps) => {

	const [allSelected, setAllSelected] = useState(true)

	const handleAllSelected = (ev:any)=>{
		ev.stopPropagation()
		setList(list.map((el)=>{return{...el,checked:ev.currentTarget.checked}}));
		setAllSelected(ev.currentTarget.checked)
	}

	const handleChange = (ev:any) => {
		
		const {value, checked} = ev.currentTarget
		ev.stopPropagation()
		setList(list.map((el)=>el.id==value?{...el,checked:checked}:el));

	}

	useEffect(()=>{
		setAllSelected(!list.some(obj => obj.checked === false))
	},[list])

	return <CheckboxStyle >

		<label key={v4()} className='checkAll'>
			<input type="checkbox" value='all' onChange={handleAllSelected} defaultChecked={allSelected} />
			Marcar todo
		</label>	

		<div className='container'>
			{list.map(({id,name,checked})=>{

				return(
					
					<label key={v4()} >
						<input key={v4()} type="checkbox" value={id} onChange={handleChange}  defaultChecked={checked}/>
						{name}
					</label>	
					
				)
			})}
		</div>
		
	</CheckboxStyle>;
};

export const CheckboxStyle = styled.div`
	

	& .container {
		display: flex;
		flex-direction: column;
		max-height: 200px;
		overflow: auto;
	}

	& .checkAll {
		border-bottom: 0.4px solid var(--light-grey);
		padding-bottom: 12px;
		margin-bottom: 12px;
	}


	& label{
		display: flex;
		align-items: center;
		padding: 8px 0;
	}

	& input{
		height:18px;
		width: 18px;
		margin-right: 12px;
	}
`;

export default Checkbox;
