import styled from "styled-components";

export const MyDataListStyle = styled.div`
	display: grid;
	grid-template-rows: auto 1fr ; 
	position: relative;
	overflow-y: auto;
	padding: 2px;

	& .header{
		display: grid;
		grid-template-columns: 1fr auto;
		margin-bottom: 12px;

		& > a{
			margin-left: 12px;
			padding: 0 8px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--primary-green);
			border: .4px solid var(--secondary-grey);
			border-radius: 4px 4px 4px 0;
			& svg{
				
				font-size: 18px;
				& path {
					color: white;
				}
			}
			& span{
				margin-right: 8px;
				color: white;
			}
		}
	}


	& .showMore {
		text-align: start;
		border: none;
		background-color: transparent;
		padding: 8px 12px;
		margin-top: 14px ;
		&:hover{
			cursor: pointer;
			color: var(--primary-blue);
		}
	}
	
	& > ul{
		overflow-y: auto;
		border-top: 0.6px solid var(--secondary-grey);
		border-bottom: 0.6px solid var(--secondary-grey);
	
		&::-webkit-scrollbar {
			-webkit-appearance: none;
		}

		&::-webkit-scrollbar:vertical {
			width:6px;
		}

		&::-webkit-scrollbar-button:increment  {
			display: none;
		} 
		&::-webkit-scrollbar-button{
			display: none;
		}

		&::-webkit-scrollbar:horizontal {
			height: 10px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: var(--primary-blue);
			
		}

		 &::-webkit-scrollbar-track {
			background-color: var(--secondary-grey);
		} 
	}
`;

