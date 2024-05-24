import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BurguerMenu } from './BurguerMenu';
import { useState } from 'react';

interface publicNavProps {
isOpen:boolean
}

const PublicNav = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
        console.log('prueba')
        setIsOpen(prevIsOpen=> !prevIsOpen)
        
    }

	return <PublicNavStyle isOpen={isOpen}>

		<BurguerMenu isOpen={isOpen} handleClick={toggleMenu}/>

		<div className={isOpen?'open containerMenu':'close containerMenu'}>
			<ul className='provisional'>
				<li onClick={()=>setIsOpen(false)}><Link to='/prueba'>Pruébalo</Link></li>
				<li onClick={()=>setIsOpen(false)}><Link to='/login'>Iniciar sesión</Link></li>
				<li onClick={()=>setIsOpen(false)}><Link to='/registro'>Registro</Link></li>
			</ul>
		</div>

		

	</PublicNavStyle>;
};



export const PublicNavStyle = styled.div<publicNavProps>`


	& .containerMenu{
		position: relative;
		display: none;
		&.open {
			background-color: rgba(0,0,0,0.4);
			position: fixed;
			display: block;
			top: 58px;
			right: 0;
			bottom: 0;
			left: 0; 
			& .provisional {
				animation: fadeIn 0.4s ease forwards;
			}

		}
		
	}

	@keyframes fadeIn {
		from{
			transform: translateX(100%);
		}

		to{
			transform: translateX(0);
		}
	}

	& .provisional {
		position: absolute;
		top: 6px;
		right: 0;
		bottom: 20px;
		min-width: 300px;
		max-width: 100%;
		background-color: white;
		padding: 14px;
		border-radius: 6px 0 0 6px;
		overflow: auto;
		transition: all 0.3s ease;
		
		
	}

	& ul{
		display: flex;
		flex-direction:column;

		& > li {
			padding: 8px 12px;
		}
	}


	@media (min-width: 600px){

		& .containerMenu{
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;


			&.open {
			position: relative;
			background-color: transparent;
			inset: 0;
		}
		}
		
		& .provisional {
			position: relative;
			background-color: transparent;
			transform: translateX(0);
			padding: 0;
			width: auto;
			inset: 0;
		}
		& ul{
			display: flex;
			flex-direction:row;
		}
	}

`;

export default PublicNav;
