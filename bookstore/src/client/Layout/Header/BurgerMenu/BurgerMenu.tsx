import React, { FC, useState } from 'react';
import { useActions } from '../../../../store/hooks/useActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../store/hooks/useTypedSelector';
import {
	BurgerMenuWrapper,
	SearchWrapper,
	StyledButtonCart,
	StyledLi,
	StyledLiClose,
	StyledList,
	StyledModal
} from './styles';
import { IconButton } from '@mui/material';
import { Close, PersonOutlineOutlined, Menu } from '@mui/icons-material';
import { NavLink, Navigate } from 'react-router-dom';
import { IAccountData } from '../../../../types';
import Search from '../Search/Search';

interface IBurgerProps {
	user?: IAccountData;
}

const BurgerMenu: FC<IBurgerProps> = () => {
	const { closeBurger, openBurger } = useActions();
	const openMenu = useTypedSelector((state) => state.isBurgerOpened.isBurgerOpened);

	const openBurgerMenu = () => {
		openBurger();
	};
	const closeBurgerMenu = () => {
		closeBurger();
	};

	const dispatch = useDispatch();
	const isLoggedIn = useTypedSelector((state) => state.userInfo.isLoggedIn);

	const clearAuthorizeUser = () => {
		// dispatch(resetSignUp());
		// dispatch(logInActions.logOutUser());
	};

	return (
		<BurgerMenuWrapper>
			<IconButton>
				{openMenu ? <Close onClick={closeBurgerMenu} /> : <Menu onClick={openBurgerMenu} />}
			</IconButton>
			{openMenu && (
				<StyledModal>
					<StyledList>
						<StyledLiClose>
							<IconButton>
								<Close onClick={closeBurgerMenu} />
							</IconButton>
						</StyledLiClose>
						<SearchWrapper>
							<Search />
						</SearchWrapper>

						{isLoggedIn && (
							<div>
								<StyledLi>
									<NavLink to={'/favotite_book'}> Favorits</NavLink>
								</StyledLi>
								<StyledLi>
									<NavLink to={'/cart'}> Cart</NavLink>
								</StyledLi>
							</div>
						)}
					</StyledList>

					<div>
						{isLoggedIn ? (
							<StyledButtonCart>LOG OUT</StyledButtonCart>
						) : (
							<StyledButtonCart onClick={closeBurgerMenu}>
								<NavLink to="/sign_in">Sign in</NavLink>
							</StyledButtonCart>
						)}
					</div>
				</StyledModal>
			)}
		</BurgerMenuWrapper>
	);
};

export default BurgerMenu;