import { BaseActionsWithPayload, IBook } from '../../types';

export enum CartBookTypes {
	ADD_BOOK = 'ADD_BOOK',
	DELETE_BOOK = 'DELETE_BOOK'
}

interface IBooksAction {
	addBookToCart: (bookId: IBook) => BaseActionsWithPayload<CartBookTypes, IBook>;
	deleteBookFromCart: (bookId: string) => BaseActionsWithPayload<CartBookTypes, string>;
}

export const cartBooksActions: IBooksAction = {
	addBookToCart: (book: IBook) => {
		return { type: CartBookTypes.ADD_BOOK, payload: book };
	},
	deleteBookFromCart: (bookId: string) => {
		return { type: CartBookTypes.DELETE_BOOK, payload: bookId };
	}
};
