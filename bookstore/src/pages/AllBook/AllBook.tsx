import React, { useEffect } from 'react';
import { AllBookContainer, BookContainer, Title } from './styles';
import BookItem from '../../client/components/BookItem/BookItem';

import { useActions } from '../../store/hooks/useActions';
import { IBook } from '../../types';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import SubscribeInput from '../../client/components/SubscribeInput/SubscribeInput';

const AllBook = () => {
	const AllBooks = useTypedSelector((state) => state.allBooks.allBooks);

	const { getAllBooks } = useActions();

	useEffect(() => {
		getAllBooks();
	}, []);

	return (
		<AllBookContainer>
			<Title>New Releases Books</Title>
			<BookContainer>
				{AllBooks &&
					AllBooks.map((book: IBook) => (
						<BookItem
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

			<SubscribeInput />
		</AllBookContainer>
	);
};

export default AllBook;
