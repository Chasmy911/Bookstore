import { Dispatch } from 'redux';
import { BaseActionsWithPayload, IBook } from '../../types';
import { AllBooksTypes, allBooksActions } from '../AllBooks/AllBooksActions';

type ResponseType = {
	books: IBook[];
};

const getBooks = async (): Promise<ResponseType> => {
	return (await fetch('https://api.itbook.store/1.0/new')).json();
};

export const getAllBooks = () => {
	return (dispatch: Dispatch) => {
		getBooks().then((data) => dispatch(allBooksActions.setBooks(data.books)));
	};
};
