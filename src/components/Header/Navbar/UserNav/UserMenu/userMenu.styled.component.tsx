import styled from "styled-components";

export const UserMenuStl = styled.div`
	
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: flex-end;
	
    & .container{
        width: 320px;
        background-color: white;
        padding: 8px 20px;
        border: 0.4px solid var(--secondary-grey);
        border-radius: 8px 0 0 8px;
        animation: 0.3s menuFadeIn ease-out forwards;
        display: grid;
        grid-template-rows: auto 1fr;

        & .content {
            overflow-x: auto;
        }
    }

    & .header, .main, .footer{
        padding: 8px 0;
    }

    & .main , .header {
        border-bottom: 0.4px solid var(--secondary-grey); 
    }

    & .header {

        display: flex;
        justify-content: space-between;
        align-items: center;
       
        

        & > div {
            background-color: none;
            flex-direction: row-reverse;

            & > img {
                height: 36px;
            }
        }
    }

    & .main {
        & >li {
            padding: 6px 8px;
            border-radius: 4px;
            font-size: 14px;

            &:hover{
                cursor: pointer;
                background-color: var(--light-grey);
            }

            & > a {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 6px;

                & svg {
                    font-size: 20px;
                }
            }
        }
    }

    & .footer {
        & button{
            width: 100%;
            font-size: 14px;
            text-align: start;
            padding: 6px 8px;
            border: none;
            background-color: transparent;
            border-radius: 4px;
            &:hover{
                cursor: pointer;
                background-color: var(--light-grey);
            }
        }
    }

    @keyframes menuFadeIn {
        from{
            transform: translateX(100%)
        }
        to{
            transform: translateX(0)
        }
    }
	
`;