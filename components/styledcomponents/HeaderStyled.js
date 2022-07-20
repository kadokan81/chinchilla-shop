import styled from 'styled-components';

export const HeaderStyled = styled.header`
	background-color: #323232;
	color: #fff;
	padding: 0.5rem 0rem;

	border-bottom: 1px solid gray;
	margin-bottom: 2rem;
	display: flex;
	gap: 15px;
	.header-cnt {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	menu {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		margin-right: 15px;
	}
	span {
		cursor: pointer;
		font-size: 1.5rem;
		letter-spacing: 1.5;
		color: gray;
	}
	span.active {
		color: #fff;
	}
	span:hover {
		transition: all 0.3s;

		color: #fff;
	}

	.links {
		display: flex;
		gap: 20px;
		align-items: center;
		flex-wrap: wrap;
	}
`;
