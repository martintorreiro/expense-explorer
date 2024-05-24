import styled from "styled-components";

export const ModalStyle = styled.div`

  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 60px 0;
  background:rgba(0,0,0,0.3);
  display:flex;
  justify-content: center;
  align-items: flex-start;

  & > .modalContainer {
    max-height: 90%;
    max-width: 90%;
    border-radius: 6px;
    position: relative;
    overflow: auto;
    animation: fadeIn 0.3s ease-out forwards; 

    & > .children {
      padding: 10px 16px;
      overflow: auto;
    }

    & > header {
      padding: 10px 16px;
      background-color: var(--primary-blue);
      display: flex;
      justify-content: space-between;

      & h3 {
        color: white;
      }

    }

    .closeButton {
    border: none;
    background-color: none;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 3px;
    cursor:pointer;
    color: #999;

        &:hover{
            color: black;
        }
    }

    &.fadeOut{
        animation: fadeOut 0.3s ease 
    }

  }

  

 @keyframes fadeIn {
    from{
        transform: scale(0)
    }
    to{
        transform: scale(1)
    }
  }

  @keyframes fadeOut {
      from{
          transform: scale(1)
      }
      to{
          transform: scale(0)
      }
  } 

 
`;