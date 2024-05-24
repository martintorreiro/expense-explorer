import styled from 'styled-components';
import { AiOutlineLoading } from "react-icons/ai";


const LoadingIcon = () => {
	return <LoadingStl>
		<div className='rotation'>  
			<AiOutlineLoading/>
		</div>
		
	</LoadingStl>;
};

export const LoadingStl = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;

	& .rotation {
		font-size: 32px;
		animation: rotate 0.6s linear infinite;;
	}

	@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;


export default LoadingIcon;