import { MyDataItem } from './MyDataItem';
import { MyDataListStyle } from './MyDataList.styled.component';
import useGetMyDataList from '@/hooks/useGetMyDataList';
import { v4 } from 'uuid';
import { useState } from 'react';
import LoadingIcon from '../Loading/Loading';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Input } from '@/components/Form/Input';

const  MyDataList = () => {

	const [filter, setFilter] = useState('')
	const [slice, setSlice] = useState(5)
	const {list, loading, error} = useGetMyDataList()

	return <MyDataListStyle >
	
	 	{list&&<>
			
			<div className="header">
				<Input type='text' name="filter" handleChange={setFilter} inputValue={filter} placeholder='Filtro...'/>
				<Link to='/nueva-hoja'><span>Nueva</span> <MdOutlineCreateNewFolder/></Link>
			</div>

			<ul>
				{list.filter(elemento => elemento.title.toLowerCase().includes(filter.toLowerCase()))
				.map((data:any)=>(<MyDataItem data={data} key={v4()}/>))
				.slice(0,slice)}
			</ul>
			
			{slice<=5&&<button className='showMore' onClick={()=>setSlice(list.length)}>Ver todo</button>}

		</>} 

		{loading&&<LoadingIcon/>}
		{error&&<p>{error}</p>}

	</MyDataListStyle>;
};


export default MyDataList;

