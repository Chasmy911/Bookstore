import React, { useEffect } from 'react';
import { BookContainer, CartContainer, Title } from './styles';
import { IBook } from '../../types';
import FavoriteBookItem from '../../client/components/FavoriteBookItem/FavoriteBookItem';
import { useSelector } from 'react-redux';
import { allBooksSelectors } from '../../store/AllBooks/AllBooksSelector';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';

import CartBookItem from '../../client/components/CartBookItem/CartBookItem';

const Cart = () => {
	const cartArr = useSelector(allBooksSelectors.getCartBooksSelector);

	return (
		<CartContainer>
			<NavLink to="/">
				<IconButton>
					<KeyboardBackspace />
				</IconButton>
			</NavLink>
			<Title>Your cart</Title>
			{cartArr.length ? (
				<BookContainer>
					{cartArr &&
						cartArr.map((book: IBook) => (
							<CartBookItem
								title={book.title}
								subtitle={book.subtitle}
								isbn13={book.isbn13}
								price={book.price}
								image={book.image}
								url={book.url}
								key={book.isbn13 + book.image}
							/>
						))}
				</BookContainer>
			) : (
				<p>Your cart is empy.</p>
			)}
		</CartContainer>
	);
};

export default Cart;
