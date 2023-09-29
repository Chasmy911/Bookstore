import React from 'react';
import { OverLay, STyledSearch, StyledContainer, StyledHeader, StyledIconButtonBurger, StyledImgDiv } from './styles';
import { IconButton } from '@mui/material';
import { FavoriteBorder, PersonOutlineOutlined, ShoppingBagOutlined } from '@mui/icons-material';
//@ts-ignore
import Bookstore from './Bookstore.svg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { allBooksSelectors } from '../../../store/AllBooks/AllBooksSelector';
import { useActions } from '../../../store/hooks/useActions';
import Search from './Search/Search';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
	const favorite = useSelector(allBooksSelectors.getAllFavoriteSelector);
	const cartArr = useSelector(allBooksSelectors.getCartBooksSelector);
	const { clearSelectedBook, closeBurger } = useActions();

	const isLoggedIn = useTypedSelector((state) => state.userInfo.isLoggedIn);

	const deleteSelectedBook = () => {
		clearSelectedBook();
	};
	const openBurger = useTypedSelector((state) => state.isBurgerOpened.isBurgerOpened);

	const closeBurgerMenu = () => {
		closeBurger();
	};

	return (
		<StyledHeader>
			{openBurger && <OverLay onClick={closeBurgerMenu} />}
			<StyledImgDiv onClick={deleteSelectedBook}>
				<NavLink to="/">
					<img src={Bookstore} />
				</NavLink>
			</StyledImgDiv>
			<STyledSearch>
				<Search />
			</STyledSearch>

			<StyledContainer>
				<IconButton onClick={deleteSelectedBook}>
					<NavLink to="/favotite_book">
						<FavoriteBorder color={favorite.length ? 'error' : 'action'} />
					</NavLink>
				</IconButton>
				<IconButton onClick={deleteSelectedBook}>
					<NavLink to="/cart">
						<ShoppingBagOutlined color={cartArr.length ? 'error' : 'action'} />
					</NavLink>
				</IconButton>

				<IconButton onClick={deleteSelectedBook}>
					{isLoggedIn ? (
						<NavLink to="/account">
							<PersonOutlineOutlined color="error" />
						</NavLink>
					) : (
						<NavLink to="/sign_in">
							<PersonOutlineOutlined color="action" />
						</NavLink>
					)}
				</IconButton>
				<StyledIconButtonBurger>
					<BurgerMenu />
				</StyledIconButtonBurger>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
