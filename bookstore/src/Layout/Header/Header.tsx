import React from 'react';
import {
	StyledContainer,
	StyledHeader,
	StyledIconButton,
	StyledImgDiv,
	StyledInput,
	StyledInputContainer
} from './styles';
import { IconButton } from '@mui/material';
import { FavoriteBorder, PersonOutlineOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material';
//@ts-ignore
import Bookstore from './Bookstore.svg';

const Header = () => {
	return (
		<StyledHeader>
			<StyledImgDiv>
				<img src={Bookstore} />
			</StyledImgDiv>

			<StyledInputContainer>
				<StyledInput placeholder="Search" />
				<StyledIconButton>
					<SearchOutlined />
				</StyledIconButton>
			</StyledInputContainer>

			<StyledContainer>
				<IconButton>
					<FavoriteBorder />
				</IconButton>
				<IconButton>
					<ShoppingBagOutlined />
				</IconButton>
				<IconButton>
					<PersonOutlineOutlined />
				</IconButton>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
