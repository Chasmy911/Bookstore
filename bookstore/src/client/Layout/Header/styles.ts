import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const StyledHeader = styled.header`
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #d9d9d9;
	padding: 0 35px;
	position: fixed;
	top: 0;

	width: 100%;
`;

export const StyledContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 150px;
`;

export const StyledInputContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 550px;
	position: relative;
`;

export const StyledInput = styled.input`
	width: 500px;
	padding: 10px;
	border: 1px solid #d9d9d9;
`;

export const StyledIconButton = styled(IconButton)`
position: absolute;
right: 50px`;

export const StyledImgDiv = styled.div`
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
`;