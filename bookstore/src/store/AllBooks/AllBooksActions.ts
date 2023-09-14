import { BaseActionsWithPayload, IBook } from '../../types';

export enum AllBooksTypes {
	SET_BOOKS = 'SET_BOOKS',
	ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE',
	DELETE_FROM_FAVOURITE = 'DELETE_FROM_FAVOURITE'
}

interface IBooksAction {
	setBooks: (books: IBook[]) => BaseActionsWithPayload<AllBooksTypes, IBook[]>;
	addToFavourite: (book: IBook) => BaseActionsWithPayload<AllBooksTypes, IBook>;
	deleteFromFavourite: (book: string) => BaseActionsWithPayload<AllBooksTypes, string>;
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
	}
};
