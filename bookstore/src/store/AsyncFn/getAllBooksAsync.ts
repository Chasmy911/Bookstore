import { Dispatch } from 'redux';
import { IBook } from '../../types';
import { allBooksActions } from '../AllBooks/AllBooksActions';
import { BooksApi } from '../../client/api/booksApi';

type ResponseType = {
	books: IBook[];
};

const getBooks = async (): Promise<any> => {
	return await BooksApi.getAllBooks();
};

export const getAllBooks = () => {
	return (dispatch: Dispatch) => {
		getBooks().then((data) => dispatch(allBooksActions.setBooks(data.data.books)));
	};
};

const getSearchBook = async (value: string): Promise<any> => {
	return await BooksApi.getSearchBooks(value);
};

export const getSearchBooks = (value: string) => {
	return (dispatch: Dispatch) => {
		getSearchBook(value).then((data) => dispatch(allBooksActions.setBooks(data.data.books)));
	};
};
