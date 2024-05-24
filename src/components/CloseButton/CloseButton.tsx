import styled from 'styled-components';
import { IoClose } from "react-icons/io5";

interface CloseButtonProps {
	onClose:()=>void
}

const CloseButton = ({onClose}:CloseButtonProps) => {


	return <CloseButtonStl onClick={onClose}>
		<IoClose/>
	</CloseButtonStl>;
};

export const CloseButtonStl = styled.button`
	padding: 10px;	
	background-color: transparent;
	border: none;
	border-radius: 4px;
	color: var(--light-grey);
	font-size: 18px;
	&:hover{
		cursor: pointer;
		background-color: var(--light-grey);
	}

	& > svg {
		display: block;
	}
`;

export default CloseButton;
