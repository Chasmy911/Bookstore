import { TabPanel } from '@mui/lab';

import styled from 'styled-components';

export const Wrapper = styled.div`padding: 100px 0;`;

export const Title = styled.h2`
	text-transform: uppercase;
	color: #313037;
	font-family: Bebas Neue;
	font-size: 36px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
`;

export const SybTitle = styled.h4`
	text-transform: uppercase;
	color: #313037;
	font-family: Bebas Neue;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
`;

export const StyledWrapper = styled.div`
	width: 50%;
	border: 2px solid black;
	height: 50%;
	margin: 200px auto;
`;

export const StyledTab = styled(TabPanel)`
	color: #313037;
	font-family: Helios;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;

	margin: 0 auto;
`;

export const StyledLabel = styled.label`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: black;
	font-size: 14px;
	font-weight: 700;
	padding: 20px 20px 20px 20px;
`;

export const StyledInput = styled.input`
	height: 40px;
	width: 100%;
	margin: 10px auto 0;
	padding-left: 15px;

	& ::-webkit-input-placeholder {
		padding: 15px;
		color: grey;
	}
`;

export const StyledButton = styled.button`
	display: inline-block;
	margin: 10px auto 0;
	width: 40%;
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

export const StyledWhiteButton = styled.button`
	display: inline-block;
	margin: 10px auto 0;
	width: 40%;
	height: 40px;
	background-color: white;
	color: black;
	text-transform: uppercase;
	font-family: Bebas Neue;
	font-size: 20px;
	font-style: normal;
	padding: 5px 0;

	&:hover {
		background-color: grey;
	}
`;
export const ProfileContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const ButtonContainer = styled.div`
	display: flex;
	width: 50%;
	justify-content: space-between;
	text-align: right;
	margin-top: 40px;
	margin-left: auto;
`;
