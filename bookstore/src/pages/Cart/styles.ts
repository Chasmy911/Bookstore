import styled from 'styled-components';

export const CartContainer = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 100px 0;
`;

export const BookContainer = styled.div`
	display: relative;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const ThanksPopUp = styled.div`
	height: 150px;
	width: 350px;
	position: absolute;
	top: calc(50% - 70px);
	left: calc(50% - 170px);
	border: 2px solid grey;
	box-shadow: 12px 12px 2px 1px rgba(254, 233, 226, 1);
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

export const TotalWrapper = styled.div`
	width: 30%;
	margin-left: auto;
`;

export const Info = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const InfoName = styled.div`
	color: #a8a8a8;

	font-family: Helios;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const InfoValue = styled.div`
	color: #313037;
	font-family: Helios;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const TotalDiv = styled.div`
	display: flex;
	justify-content: space-between;
	color: #313037;
	font-family: Bebas Neue;
	font-size: 30px;
	font-style: normal;
	font-weight: 700;
	line-height: 60px;
`;

export const StyledButton = styled.button`
	display: inline-block;
	margin: 10px auto 0;
	width: 100%;
	height: 40px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: Bebas Neue;
	font-size: 20px;
	font-style: normal;
	padding: 5px 0;

	&:hover {
		background-color: grey;
	}
`;

export const StyledP = styled.p`
	display: flex;
	justify-content: center;
	font-size: 28px;
	padding: 15px;
	margin-bottom: 25px;
`;
