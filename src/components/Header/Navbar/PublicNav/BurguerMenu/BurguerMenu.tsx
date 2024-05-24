import styled from 'styled-components';

export interface BurguerMenuProps  {
	isOpen:boolean,
	handleClick: () => void
}

interface BurguerProps {
    isOpen:boolean
}

const BurguerMenu  = ({isOpen, handleClick}:BurguerMenuProps) => {
	return <BurguerMenuStyle isOpen={isOpen} onClick={handleClick} >
		<span></span>
        <span></span>
        <span></span>
	</BurguerMenuStyle>;
};

export const BurguerMenuStyle = styled.button<BurguerProps>`
    background-color: transparent;
    border: none;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 100;

    @media (min-width: 600px){
        display: none;
    }
    
    &:hover{
        cursor: pointer;
    }

    & > span{
        background-color: black;
        height: 3px;
        width: 24px;
        transition: all 0.3s ease-out;
        border-radius: 2px;

        &:nth-child(2){
            display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
        }

        &:nth-child(1){
            transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translateY(-3px)' : 'rotate(0)')} ;
            transform-origin: left ;
        }

        &:nth-child(3){
            transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translateY(3px)' : 'rotate(0)')} ;
            transform-origin: left;
        }
    }

    
`

export default BurguerMenu;
