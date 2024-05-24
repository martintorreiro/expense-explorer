import { PiFilePdfLight, PiShareNetworkLight } from 'react-icons/pi';
import { BiEdit } from 'react-icons/bi';
import styled from 'styled-components';
import useClickOutside from '@/hooks/useClickOutside';
import { useRef } from 'react';

interface PanelMenuProps {
	closeMenu: ()=>void
}

const PanelMenu  = ({closeMenu}:PanelMenuProps) => {
	const menuRef = useRef(null)
	useClickOutside({ref:menuRef,callback:closeMenu})
	return <PanelMenuStl ref={menuRef}>
		<li><PiShareNetworkLight/><span>Compartir</span></li>
		<li><BiEdit/><span>Modificar</span></li>
		<li><PiFilePdfLight/><span>Exportar</span></li>
	</PanelMenuStl>;
};

export const PanelMenuStl = styled.ul`

	box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
	position: absolute;
	top: 26px;
	right: 0;
	background-color: white;
	font-size: 16px;
	text-align: start;
	border: 1px solid var(--secondary-grey);
	border-radius: 4px;
	& > li {
		padding: 6px 0;
		display: flex;
		align-items: center;
		&:hover{
			
			cursor: pointer;
			& path, span{
				color: var(--primary-blue);
			}
		}
		& span{
			padding-right: 16px;
		}
	}
			
`;

export default PanelMenu;
