import styled from 'styled-components';
import { ExpensesProps } from '../PanelProps';
import { v4 } from 'uuid';
import { formatDate } from '@/utilities/formatDate';


const Expenses = ({expenses}:ExpensesProps) => {
	console.log('ex->', expenses)
	return <ExpensesStyle >
		{expenses.length>0?
			<ul>
				{expenses.map((ex)=><li key={v4()}>

					<div>
						<h4>{ex.concept}</h4>
						<span className='name'>{ex.payerName}</span>
					</div>
				
					<div className='info'>
						<span>{ex.amount} $</span>
						<time>{formatDate(new Date(ex.dateCreation))}</time>
					</div>

				</li>)}
			</ul>
		:'Todabía no hay gastos'}
	</ExpensesStyle>;
};

export const ExpensesStyle = styled.div`
	padding: 0 0 28px 0;
	overflow: hidden;
	& li{
		display: flex;
		justify-content: space-between;
		padding: 8px 0;
		border-bottom: 0.4px solid var(--secondary-grey);
	}

	& .name {
		font-size: 14px;
	}

	& .info {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		font-size:18px;
		& time {
			font-size:14px
		}
	}
`;

export default Expenses;
