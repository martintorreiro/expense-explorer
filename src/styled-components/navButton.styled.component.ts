import styled from "styled-components";

export const NavButton = styled.button`
	
        width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 36px;
		border:0.2px solid var(--primary-grey);
		border-radius: 6px;
		font-size: 16px;
		color: var(--primary-grey);
		margin-bottom: 10px;
		font-weight: 600;
		cursor:pointer;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		background-color: white;

        &:not(button[type="button"]){
		margin-top: 14px;
		background-color: var(--primary-green);
		color: white;
		border:none;
		text-shadow: 0 0 1em black, 0 0 0.2em black;
	}

		& img{
			height: 20px;
			margin-right: 12px;
		}


`;