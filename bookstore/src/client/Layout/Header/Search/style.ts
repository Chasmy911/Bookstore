import { IconButton } from '@mui/material';
import styled from 'styled-components';

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
