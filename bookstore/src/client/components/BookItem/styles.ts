import styled from 'styled-components';
import { backgroundColor } from './helper';

export const StyledItem = styled.div`
	width: 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
`;

export const StyledImg = styled.div`
	width: 100%;
	background-color: ${backgroundColor};
	height: 270px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Image = styled.img`
	display: block;
	height: 250px;
`;

export const StyledTitle = styled.h2`
	color: #313037;
	font-family: Bebas Neue;
	text-transform: uppercase;
	padding: 10px 0;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;
`;

export const StyledInfo = styled.div`width: 100%;`;

export const ArticleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	color: #a8a8a8;
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
`;

export const Price = styled.div`
	color: #313037;
	font-family: Bebas Neue;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;
`;
