import useGetRecentActivity from '@/hooks/useGetRecentActivity';
import styled from 'styled-components';
import LoadingIcon from '../Loading/Loading';
import { formatDate } from '@/utilities/formatDate';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const RecentActivity = () => {
    const { list, loading, error } = useGetRecentActivity();
    return (
        <RecentActivityStl>
            {list &&
                list.map((el) => (
                    <li key={v4()}>
                        <Link to={`/${el.urlCode}`}>
                            <div>
                                <h4>{el.title}</h4>
                                <span>{el.creator}</span>
                            </div>

                            <div>
                                <strong>{el.action}</strong>
                                <span>{formatDate(new Date(el.date))}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            {loading && <LoadingIcon />}
            {error && <p>{error}</p>}
        </RecentActivityStl>
    );
};

export const RecentActivityStl = styled.div`
    & li > a {
        display: flex;
        justify-content: space-between;
        padding: 8px 12px;
        & > div {
            display: flex;
            flex-direction: column;
            &:last-child {
                text-align: end;
            }
        }
    }

    & li:not(:last-child) {
        border-bottom: 0.8px solid var(--light-grey);
    }

    & li:hover {
        background-color: var(--light-grey);
    }

    & span {
        font-size: 14px;
    }
`;

export default RecentActivity;
