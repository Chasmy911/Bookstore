import { BaseActionsWithPayload, IBook } from '../../types';

export enum AllBooksTypes {
	SET_BOOKS = 'SET_BOOKS',
	ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE',
	DELETE_FROM_FAVOURITE = 'DELETE_FROM_FAVOURITE',
	ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART',
	REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART'
}

interface IBooksAction {
	setBooks: (books: IBook[]) => BaseActionsWithPayload<AllBooksTypes, IBook[]>;
	addToFavourite: (book: IBook) => BaseActionsWithPayload<AllBooksTypes, IBook>;
	deleteFromFavourite: (book: string) => BaseActionsWithPayload<AllBooksTypes, string>;
	addBookToCart: (book: IBook) => BaseActionsWithPayload<AllBooksTypes, IBook>;
	removeBookFromCart: (bookId: string) => BaseActionsWithPayload<AllBooksTypes, string>;
}

export const allBooksActions: IBooksAction = {
	setBooks: (books: IBook[]) => {
		return { type: AllBooksTypes.SET_BOOKS, payload: books };
	},
	addToFavourite: (book: IBook) => {
		return { type: AllBooksTypes.ADD_TO_FAVOURITE, payload: book };
	},
	deleteFromFavourite: (bookId: string) => {
		return { type: AllBooksTypes.DELETE_FROM_FAVOURITE, payload: bookId };
	},
	addBookToCart: (book: IBook) => {
		return { type: AllBooksTypes.ADD_BOOK_TO_CART, payload: book };
	},
	removeBookFromCart: (bookId: string) => {
		return { type: AllBooksTypes.REMOVE_BOOK_FROM_CART, payload: bookId };
	}
};
