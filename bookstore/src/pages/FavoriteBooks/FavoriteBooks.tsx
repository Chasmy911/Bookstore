import React, { useEffect } from 'react';
import { BookContainer, FavoriteBookContainer, Title } from './styles';
import { IBook } from '../../types';
import FavoriteBookItem from '../../client/components/FavoriteBookItem/FavoriteBookItem';
import { useSelector } from 'react-redux';
import { allBooksSelectors } from '../../store/AllBooks/AllBooksSelector';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FavoriteBorder, KeyboardBackspace } from '@mui/icons-material';

const FavoriteBooks = () => {
	const favoriteBooksArr = useSelector(allBooksSelectors.getAllFavoriteSelector);

	return (
		<FavoriteBookContainer>
			<NavLink to="/">
				<IconButton>
					<KeyboardBackspace />
				</IconButton>
			</NavLink>
			<Title>Favorites</Title>
			{favoriteBooksArr.length ? (
				<BookContainer>
					{favoriteBooksArr &&
						favoriteBooksArr.map((book: IBook) => (
							<FavoriteBookItem
								title={book.title}
								subtitle={book.subtitle}
								isbn13={book.isbn13}
								price={book.price}
								image={book.image}
								url={book.url}
								key={book.isbn13}
							/>
						))}
				</BookContainer>
			) : (
				<p>
					{' '}
					Please, add book to Favorites. You need to click the heart{' '}
					<FavoriteBorder color="action" fontSize="inherit" /> on the book page.
				</p>
			)}
		</FavoriteBookContainer>
	);
};

export default FavoriteBooks;
