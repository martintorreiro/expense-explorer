import { formatDate } from '@/utilities/formatDate';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface MyDataItemProps {
    data: {
        title: string;
        description: string;
        dateCreation: string;
        urlCode: string;
    };
}

const MyDataItem = ({ data }: MyDataItemProps) => {
    return (
        <MyDataItemStyle>
            <Link to={`/${data.urlCode}`}>
                <div className='data'>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                </div>
                <span>{formatDate(new Date(data.dateCreation))}</span>
            </Link>
        </MyDataItemStyle>
    );
};

export const MyDataItemStyle = styled.li`
    &:not(:last-child) {
        border-bottom: 0.8px solid var(--light-grey);
    }
    & > a {
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 8px 12px;

        transition: all 0.3s ease;
        &:hover {
            background-color: var(--light-grey);
        }
    }

    & .data {
        overflow: hidden;
    }

    & h4,
    p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    & p {
        font-size: 14px;
    }

    & span {
        padding-left: 18px;
    }
`;

export default MyDataItem;
