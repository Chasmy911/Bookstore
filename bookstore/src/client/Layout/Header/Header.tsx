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
import { useActions } from '../../../store/hooks/useActions';
import Search from './Search/Search';

const Header = () => {
	const favorite = useSelector(allBooksSelectors.getAllFavoriteSelector);
	const cartArr = useSelector(allBooksSelectors.getCartBooksSelector);
	const { clearSelectedBook } = useActions();

	const deleteSelectedBook = () => {
		clearSelectedBook();
	};

	return (
		<StyledHeader>
			<StyledImgDiv onClick={deleteSelectedBook}>
				<NavLink to="/">
					<img src={Bookstore} />
				</NavLink>
			</StyledImgDiv>

			<Search />

			<StyledContainer>
				<IconButton>
					<NavLink to="/favotite_book">
						<FavoriteBorder color={favorite.length ? 'error' : 'action'} />
					</NavLink>
				</IconButton>
				<IconButton>
					<NavLink to="/cart">
						<ShoppingBagOutlined color={cartArr.length ? 'error' : 'action'} />
					</NavLink>
				</IconButton>
				<IconButton>
					<NavLink to="/account">
						<PersonOutlineOutlined color="action" />
					</NavLink>
				</IconButton>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
