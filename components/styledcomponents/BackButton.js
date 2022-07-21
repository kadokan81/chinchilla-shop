import styled from 'styled-components';

export const BackButton = styled.span`
	cursor: pointer;
	border-radius: 5px;
	display: inline-flex;
	align-items: center;
	gap: 5px;
	background-color: #323232;
	color: gray;
	padding: 0.5rem 1rem;
	transition: all 0.3s;

	svg path {
		transition: all 0.3s;
		fill: gray;
	}
	:hover {
		color: #fff;
		svg path {
			fill: #fff;
		}
	}
`;
