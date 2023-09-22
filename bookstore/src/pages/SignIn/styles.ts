import { TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import styled from 'styled-components';

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
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 15px;
	color: black;
	font-size: 14px;
	font-weight: 700;
	padding: 20px 20px 20px 20px;
`;

export const StyledInput = styled.input`
	height: 30px;
	width: 100%;
	margin: 0 auto;
	padding-left: 15px;

	& ::-webkit-input-placeholder {
		padding: 15px;
		color: grey;
	}
`;

export const StyledButton = styled.button`
	display: inline-block;
	margin: 10px auto 0;
	width: 90%;
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
