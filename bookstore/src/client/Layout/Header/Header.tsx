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
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { allBooksSelectors } from '../../../store/AllBooks/AllBooksSelector';

const Header = () => {
	const favorite = useSelector(allBooksSelectors.getAllFavoriteSelector);
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
					<NavLink to="/book/favotite_book">
						<FavoriteBorder color={favorite.length ? 'error' : 'action'} />
					</NavLink>
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
