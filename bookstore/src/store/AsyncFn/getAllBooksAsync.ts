import { Dispatch } from 'redux';
import { allBooksActions } from '../AllBooks/AllBooksActions';
import { BooksApi } from '../../client/api/booksApi';

const getBooks = async (): Promise<any> => {
	return await BooksApi.getAllBooks();
};

export const getAllBooks = () => {
	return (dispatch: Dispatch) => {
		getBooks().then((data) => dispatch(allBooksActions.setBooks(data.data.books)));
	};
};
