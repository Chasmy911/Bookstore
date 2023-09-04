import { BaseActionsWithPayload, IBook } from '../../types';
import { SelectedBookTypes, selectedBookAction } from '../Book/BookActions';

const getBook = async (isbn13: string): Promise<IBook> => {
	const response = await fetch(`https://api.itbook.store/1.0/books/${isbn13}/`);

	return response.json();
};

export const getSelectedPostsAsync = (isbn13: string) => {
	return (dispatch: (arg0: BaseActionsWithPayload<SelectedBookTypes, IBook | null>) => IBook) => {
		getBook(isbn13).then((data) => {
			return dispatch(selectedBookAction.setSelectedBook(data));
		});
	};
};
