import styled from "styled-components";

export const PopUpStyle = styled.div`

  z-index: 100;
  position: absolute;
  top: 58px;
  right: 0;
  left: 0;

  & > .modalContainer {
    background-color: var(--primary-green);
    color: white;
    position: relative;
    animation: fadeIn 0.2s ease forwards;
    display: grid;
    grid-template-columns: 1fr auto;
    transform-origin: top;

    & > .children {
      padding: 10px 16px;
      overflow: auto;
      text-align: center;
    }

    .closeButton {
    border: none;
    background-color: transparent;
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
        animation: fadeOut 0.2s ease
    }

  }

  

  @keyframes fadeIn {
    from{
        transform: scaleY(0)
    }
    to{
        transform: scaleY(1)
    }
  }

  @keyframes fadeOut {
      from{
          transform: scaleY(1)
      }
      to{
          transform: scaleY(0)
      }
  }
`;