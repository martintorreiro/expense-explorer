import styled from "styled-components";

export const ButtonStyled = styled.button`
    color: white;
    background-color: var(--primary-blue);
    border: 0.6px solid var(--secondary-grey);
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 14px;


    &:hover {
		cursor: pointer;
	}

    &[type="submit"] {
        color: white;
        background-color: var(--primary-green);
    }
`;