import styled from 'styled-components';

export interface ButtonProps  {
	children: JSX.Element | JSX.Element[] | string ,
	type?: "button" | "submit" | "reset" | undefined,
	handleClick?:React.MouseEventHandler<HTMLButtonElement>	
}

const Button = ({children, type=undefined, handleClick}:ButtonProps) => {
	return <ButtonStyle  type={type}  onClick={handleClick}>{children}</ButtonStyle>;
};

export const ButtonStyle = styled.button`
	background-color: white;
	color: var(--primary-grey);
	border: 0.4px solid var(--secondary-grey);
	border-radius:6px;
    padding: 6px 12px;
	transition: all 0.3s ease;
	font-size: 14px;
	&:hover {
		cursor: pointer;
		background-color: var(--light-grey);
	}

	&[type="submit"]{
		color: white;
		background-color: var(--primary-green);
	}
`


export default Button;
