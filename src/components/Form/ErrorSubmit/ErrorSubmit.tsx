import styled from 'styled-components';

export interface ErrorSubmitProps {
	children:string
}

const ErrorSubmit = ({children}:ErrorSubmitProps) => {
	return <ErrorSubmitStyle>
		<p>{children}</p>
	</ErrorSubmitStyle>;
};

export const ErrorSubmitStyle = styled.div`
	& > p{
		color: var(--primary-red);
	}
`;

export default ErrorSubmit;
