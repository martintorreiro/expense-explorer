import { AsideProfile } from '@/components/AsideProfile';
import { MyDataList } from '@/components/MyDataList';
import { RecentActivity } from '@/components/RecentActivity';
import GraphActivity from '@/components/graphActivity/GraphActivity';
import { BoxContainerStyle } from '@/styled-components/boxContainer.styled';
import { Page } from '@/styled-components/page.styled';
import styled from 'styled-components';

const UserHome = () => {
    return (
        <Page>
            <UserHomeStl>
                <aside>
                    <BoxContainerStyle>
                        <AsideProfile />
                    </BoxContainerStyle>
                </aside>

                <div className='content'>
                    <div>
                        <BoxContainerStyle>
                            <h3>Hojas de cálculo</h3>
                            <MyDataList />
                        </BoxContainerStyle>
                    </div>

                    <div>
                        <BoxContainerStyle>
                            <h3>Actividad</h3>
                            <GraphActivity></GraphActivity>
                            <RecentActivity />
                        </BoxContainerStyle>
                    </div>
                </div>
            </UserHomeStl>
        </Page>
    );
};

export const UserHomeStl = styled.div`
    display: flex;
    flex-direction: column-reverse;

    & .content {
        width: 100%;
    }

    & .content h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    @media (min-width: 1100px) {
        flex-direction: row;
        & aside {
            margin-right: 22px;
            width: 380px;
        }
    }
`;

export default UserHome;
