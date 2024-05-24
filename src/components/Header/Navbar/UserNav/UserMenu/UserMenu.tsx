import useClickOutside from '@/hooks/useClickOutside';
import {useContext, useRef} from 'react'
import { UserMenuStl } from './userMenu.styled.component';
import { Link } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import { UserIcon } from '..';
import { CloseButton } from '@/components/CloseButton';
import { CiSettings, CiUser, CiViewList } from "react-icons/ci";

interface UserMenuProps {
	closeMenu: ()=>void
}

const UserMenu  = ({closeMenu}:UserMenuProps) => {

	const {logout, user} = useContext(AuthContext)
	const ref = useRef(null)

	useClickOutside({ref:ref, callback:closeMenu})

	return <UserMenuStl>

		<div className='container' ref={ref}>
			<div className="header">
				<UserIcon />
				<CloseButton onClose={closeMenu}/>
			</div>
			<div className="content">

				<ul className='main'>
					<li onClick={closeMenu}><Link to={`/perfil`}><CiUser/>Mi perfil</Link></li>
					<li onClick={closeMenu}><Link to='/mi-lista'><CiViewList/>Mi lista</Link></li>
					<li onClick={closeMenu}><Link to='/ajustes'><CiSettings/>Ajustes</Link></li>
				</ul>

				<div className="footer">
					<button onClick={()=>logout()}>Cerrar sesión</button>
				</div>

			</div>
			
		</div>
			
	</UserMenuStl>;
};

export default UserMenu;
