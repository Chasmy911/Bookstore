import { Dispatch } from 'redux';
import { IBook } from '../../types';
import { selectedBookAction } from '../Book/BookActions';

const getBook = async (isbn13: string): Promise<IBook> => {
	const response = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`);

	return response.json();
};

export const getSelectedBookAsync = (isbn13: string) => {
	return (dispatch: Dispatch) => {
		getBook(isbn13).then((data) => {
			return dispatch(selectedBookAction.setSelectedBook(data));
		});
	};
};
