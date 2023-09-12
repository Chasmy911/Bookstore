import styled from 'styled-components';

export const AllBookContainer = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 100px 0;
`;

export const BookContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 15px;
`;

export const Title = styled.h2`
	font-family: Bebas Neue;
	text-transform: uppercase;
	font-size: 50px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
	padding: 10px 0 20px;
`;
