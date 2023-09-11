import { BaseActionsWithPayload, IBook } from '../../types';

export enum AllBooksTypes {
	SET_BOOKS = 'SET_BOOKS',
	ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
}

interface IBooksAction {
	setBooks: (books: IBook[]) => BaseActionsWithPayload<AllBooksTypes, IBook[]>;
	addToFavourite: (bookId: string) => BaseActionsWithPayload<AllBooksTypes, string>;
}

export const allBooksActions: IBooksAction = {
	setBooks: (books: IBook[]) => {
		return { type: AllBooksTypes.SET_BOOKS, payload: books };
	},
	addToFavourite: (bookId: string) => {
		return { type: AllBooksTypes.ADD_TO_FAVOURITE, payload: bookId };
	}
};
