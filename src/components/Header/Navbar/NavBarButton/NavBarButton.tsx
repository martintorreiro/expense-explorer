import { NavButton } from '@/styled-components/navButton.styled.component';

export interface NavBarButtonProps  {
	children: JSX.Element | JSX.Element[] | string ,
	className?:string,
	type?: "button" | "submit" | "reset" | undefined,
	handleClick?:React.MouseEventHandler<HTMLButtonElement>	
}

const NavBarButton = ({children, className, type=undefined, handleClick}:NavBarButtonProps) => {
	return <NavButton className={className} type={type}  onClick={handleClick}>{children}</NavButton>;
};



export default NavBarButton;
