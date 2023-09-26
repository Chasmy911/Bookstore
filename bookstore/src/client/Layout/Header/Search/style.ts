import { IconButton } from '@mui/material';
import styled from 'styled-components';

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

export const StyledInput = styled.input`
	width: 500px;
	padding: 10px;
	border: 1px solid #d9d9d9;
	margin-left: 10px;

	@media (max-width: 950px) {
		width: 400px;
	}
`;

export const StyledIconButton = styled(IconButton)`
position: absolute;
right: 50px`;
