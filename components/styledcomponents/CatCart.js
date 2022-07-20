import styled from 'styled-components';

export const CatCart = styled.div`
	cursor: pointer;
	margin: 0 auto;
	max-width: 600px;
	display: flex;
	gap: 20px;
	background: #fff;
	align-items: center;
	/* border: 1px solid #dcd7c9; */
	box-shadow: 3px 5px 10px #dcd7c9;

	border-radius: 10px;
	color: #323232;
	transition: all 0.3s ease-in-out;
	:hover {
		transform: translateY(-5px);
		box-shadow: 13px 15px 16px #dcd7c9;
	}
	.img-link {
		flex: 0 1 45%;

		padding-left: 10px;
		border-radius: 10px;
		overflow: hidden;
	}
	.img-link img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
	h2 {
		font-weight: 300;
	}

	img:hover {
		/* transition: all 1s ease;
		transform: scale(1.2); */
	}
	.cart-content__title {
		span {
			color: gray;
			font-size: 1.3rem;
		}
	}
`;
