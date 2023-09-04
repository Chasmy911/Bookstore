import { BaseActionsWithPayload, IBook } from '../../types';
import { AllBooksTypes, allBooksActions } from '../AllBooks/AllBooksActions';

const getBooks = async (): Promise<IBook[]> => {
	return (await fetch('https://api.itbook.store/1.0/new')).json();
};

export const getAllBooks = () => {
	return (dispatch: (arg0: BaseActionsWithPayload<AllBooksTypes, IBook[]>) => any) => {
		getBooks().then((data) => dispatch(allBooksActions.setBooks(data)));
	};
};
