import styled from 'styled-components';
import { IconButton } from '@mui/material';
import Search from './Search/Search';

export const StyledHeader = styled.header`
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #d9d9d9;
	padding: 0 35px;
	position: fixed;
	top: 0;
	background-color: white;
	width: 100%;
	max-width: 1120px;
	z-index: 111;
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

	@media (max-width: 950px) {
		width: 450px;
	}
`;

export const StyledIconButtonBurger = styled(IconButton)`
display: none;

@media (max-width: 850px) {
		display: block;
	}
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #d9d9d9;
`;

export const StyledIconButton = styled(IconButton)`
position: absolute;
right: 50px;`;

export const StyledImgDiv = styled.div`
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30%;
`;

export const STyledSearch = styled(Search)`
	display: block;
	@media (max-width: 800px) {
		display: none;
	}
`;

export const OverLay = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 998;
	background: rgba(49, 48, 55, 0.50);
	overflow: hidden;
`;
