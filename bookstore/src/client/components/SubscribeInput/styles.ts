import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: #f4eefd;
	padding: 50px 65px;
	margin-top: 20px;
`;

export const Title = styled.label`
	color: #313037;
	font-family: Bebas Neue;
	text-transform: uppercase;
	font-size: 30px;
	font-style: normal;
	font-weight: 700;
	line-height: 60px;
	margin-bottom: 25px;
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const InputContainer = styled.div`display: flex;`;

export const StyledInput = styled.input`
	display: block;
	width: 80%;
	padding: 16px 40px;

	font-family: DIN Pro;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
`;

export const StyledButton = styled.button`
	display: block;
	width: 20%;
	color: white;
	background: black;
	padding: 16px 40px;
	text-transform: uppercase;
	font-family: Bebas Neue;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px; /* 133.333% */
	letter-spacing: 0.9px;

	&:hover {
		background: #5b5a62;
	}
`;
