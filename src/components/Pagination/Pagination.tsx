import styled from 'styled-components';
import { Button } from '../Button';
import { useState } from 'react';

export interface paginationProps {
	LengthList: number,
	children: JSX.Element[]
}

const Pagination = ({ LengthList, children }:paginationProps) => {
	
	const [itemsPerPage] = useState(16)
	const [currentPage, setCurrentPage] = useState(1)

	const listLastIndex = currentPage * itemsPerPage
	const listFirstIndex = listLastIndex - itemsPerPage
	
	const totalPages = Math.ceil(LengthList/itemsPerPage)

	const buttonFirstIndex = currentPage < 2 ? currentPage : currentPage - 1
	const buttonLastIndex = buttonFirstIndex + 2 > totalPages ? totalPages:buttonFirstIndex + 2

	const pageNumbers = []
	
	for (let index = buttonFirstIndex; index <= buttonLastIndex; index++) {
		pageNumbers.push(index)
	}

	const nextPage = () =>{ if(currentPage<totalPages)setCurrentPage(currentPage+1) }

	const prevPage = () => { if(currentPage>1)setCurrentPage(currentPage-1) }

	
	return <PaginationStyle >

		<ul>{children.slice(listFirstIndex,listLastIndex)}</ul>
		
		<nav className="pagination" >

			<Button handleClick={prevPage} className={currentPage<2?'pagination-previous disable':'pagination-previous'}>Anterior</Button>

			<ul className="pagination-list">
				{pageNumbers.map((number)=>(<li key={number}>
					<button
						onClick={()=>setCurrentPage(number)}
						className={currentPage===number?'pagination-item current-page':'pagination-item'}
					>{number}</button>
				</li>))}
			</ul>

			<Button handleClick={nextPage} className={currentPage>=totalPages?'pagination-next disable':'pagination-next'} >Siguiente</Button>

		</nav>
	</PaginationStyle>;
};

export const PaginationStyle = styled.div`
	
	display: grid;
	grid-template-rows: 1fr auto;
	position: relative;
	overflow: auto;

	& > ul{
		overflow-y: auto;
		border-top: 0.6px solid var(--secondary-grey);
		border-bottom: 0.6px solid var(--secondary-grey);
	}

	& .pagination{
		padding: 10px 20px;
		display: flex;
		justify-content: center;
		border-top: 0.6px solid var(--light-grey);
		position: sticky;
		bottom: 0;
		left: 0;
		right: 0;
		background-color:white;
	}

	& .pagination-previous{
		margin-right: 30px;
	}

	& .pagination-next{
		margin-left: 30px;
	}

	& button{
		border: 0.6px solid var(--secondary-grey);
		border-radius: 6px;
		padding: 0 14px;
		background-color: white;
		color: var(--primary-grey);
	
		&.disable{
			background-color: var(--light-grey);
			opacity: 0.6;
		}
		
		&.pagination-item{
			width: 40px;
			height: 40px;
			&.current-page{
				background-color: var(--primary-blue);
				color: white;
			}
		}
		&:not(.current-page){
				cursor: pointer;
				&:not(.disable):hover{
					border: 0.6px solid var(--primary-blue);
					color: var(--primary-blue);
				}
		}
	}


	& .pagination-list{
		display: flex;
	}
`;

export default Pagination;
