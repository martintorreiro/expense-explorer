import styled from 'styled-components';
import usePanel from './usePanel';
import { useState, useContext } from 'react';
import { openModal } from '@/components/Modal';
import AddExpenseForm from '@/components/Form/AddExpense/AddExpense';
import { ButtonStyled } from '@/styled-components/button.styled';
import { BoxContainerStyle } from '@/styled-components/boxContainer.styled';
import { HiOutlineDotsVertical, HiSearch } from 'react-icons/hi';
import { formatDate } from '@/utilities/formatDate';
import { PanelMenu } from './PanelMenu';
import { Expenses } from '..';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import { RecentActivity } from '@/components/RecentActivity';
import { MyDataList } from '@/components';
import { Page } from '@/styled-components/page.styled';

const Panel = () => {
    const { datasheet, getDatasheet, error, loading } = usePanel();
    const { token } = useContext(AuthContext);

    const [toggleState, setToggleState] = useState(false);
    const [showMenu, setSowMenu] = useState(false);

    const handleOpen = (e: any) => {
        e.stopPropagation();

        if (datasheet && token) {
            openModal(
                <AddExpenseForm
                    token={token}
                    datasheetId={datasheet.id}
                    userList={datasheet.users}
                    updateList={() => getDatasheet()}
                />
            );
        }
    };

    const openMenu = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation();
        setSowMenu((prevShowMenu) => !prevShowMenu);
    };

    return (
        <Page>
            <PanelStyle>
                <aside>
                    <BoxContainerStyle>
                        <h3>Hojas de cálculo</h3>
                        <MyDataList />
                    </BoxContainerStyle>

                    <BoxContainerStyle>
                        <h3>Actividad reciente</h3>
                        <RecentActivity />
                    </BoxContainerStyle>
                </aside>

                <div className='content'>
                    {datasheet && (
                        <BoxContainerStyle>
                            <div className='panelHeader'>
                                <div>
                                    <h3>{datasheet.title}</h3>
                                    <p>{datasheet.description}</p>
                                </div>
                                <div>
                                    <div className='controls'>
                                        <HiSearch />
                                        <HiOutlineDotsVertical
                                            onClick={openMenu}
                                        />
                                        {showMenu && (
                                            <PanelMenu
                                                closeMenu={() =>
                                                    setSowMenu(false)
                                                }
                                            />
                                        )}
                                    </div>
                                    <p className='date'>
                                        {formatDate(
                                            new Date(datasheet.dateCreation)
                                        )}
                                    </p>
                                </div>
                            </div>

                            <nav className='navigation'>
                                <ul>
                                    <li onClick={() => setToggleState(false)}>
                                        Gastos
                                    </li>
                                    <li onClick={() => setToggleState(true)}>
                                        Saldos
                                    </li>
                                </ul>
                            </nav>

                            <div className='panelContent'>
                                {toggleState ? (
                                    'saldos'
                                ) : (
                                    <Expenses expenses={datasheet.expenses} />
                                )}
                            </div>

                            <div className='panelFooter'>
                                <div>
                                    <p>
                                        Gasto total: <span>128$</span>
                                    </p>
                                    <p>
                                        Saldo: <span>-32$</span>
                                    </p>
                                </div>

                                <ButtonStyled onClick={handleOpen}>
                                    Añadir gasto
                                </ButtonStyled>
                            </div>
                        </BoxContainerStyle>
                    )}

                    {loading && <p>Cargando...</p>}
                    {error && <p>{error}</p>}
                </div>
            </PanelStyle>
        </Page>
    );
};

export const PanelStyle = styled.div`
    & aside {
        display: flex;
        flex-direction: column;
    }

    display: flex;
    flex-direction: column-reverse;

    & .content {
        width: 100%;
        margin: 0 auto;

        & .panelHeader {
            display: grid;
            grid-template-columns: 1fr auto;
            padding-bottom: 16px;
            & h3 {
                margin-bottom: 12px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }

            & .controls {
                position: relative;
                font-size: 22px;
                margin-bottom: 12px;
                display: flex;

                & svg {
                    margin: 0 8px;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            & > div {
                &:first-child {
                    overflow: hidden;
                }

                &:last-child {
                    padding-left: 12px;
                    text-align: end;
                }
            }
        }

        & .panelContent {
            height: 340px;

            overflow: auto;
            &::-webkit-scrollbar {
                -webkit-appearance: none;
            }

            &::-webkit-scrollbar:vertical {
                width: 6px;
            }

            &::-webkit-scrollbar-button:increment {
                display: none;
            }
            &::-webkit-scrollbar-button {
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

        & .navigation {
            & ul {
                display: flex;
                justify-content: flex-end;
                border-bottom: 1px solid var(--secondary-grey);
                & > li {
                    padding: 8px 16px;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        & .panelFooter {
            padding: 16px 0;
            border-top: 1px solid var(--secondary-grey);
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            & > div {
                display: flex;
                flex-wrap: wrap;
            }

            & > p {
                margin-bottom: 8px;
            }

            & > button {
            }

            & span {
                font-size: 14px;
                margin-right: 8px;
            }
        }
    }

    @media (min-width: 1100px) {
        flex-direction: row;
        & aside {
            margin-right: 22px;
            width: 380px;
        }
    }
`;

export default Panel;
