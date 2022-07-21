import React from 'react';
import styled from 'styled-components';

const SenterDiv = styled.div`
	position: relative;
	width: 100px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	button {
		border: none;
		background: transparent;

		position: relative;
	}
`;

const Loader = () => (
	<SenterDiv>
		<button type='button' disabled=''>
			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
				<circle
					className='opacity-25'
					cx='12'
					cy='12'
					r='10'
					stroke='currentColor'
					strokeWidth='4'
				/>
				<path
					fill='currentColor'
					d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
				/>
			</svg>
			Loading...
		</button>
	</SenterDiv>
);

export default Loader;
