import styled from 'styled-components';

export const SectionMain = styled.section`
	flex: 1 1 auto;
	height: 100%;
	h1 {
		color: #323232;
		font-size: clamp(1.5rem, -0.875rem + 8.333vw, 3.5rem);
	}

	p {
		color: #323232;
		font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);

		line-height: 1.5;
	}
	.content-main {
		flex: 0 1 50%;
	}

	.main-image {
		position: relative;
		display: block;
		flex: 0 1 50%;
	}
	.main-image img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (max-width: 800px) {
		.main-image {
			width: 300px;
		}
	}
`;

export const MainContent = styled.div`
	flex: 1 1 auto;

	display: flex;
	gap: 30px;
	@media (max-width: 800px) {
		flex-direction: column-reverse;
	}
`;
