import { BaseActionsWithPayload, IBook } from '../../types';
import { AllBooksTypes } from './AllBooksActions';

type defaultStateType = Record<string, IBook[]>;

const defaultState: defaultStateType = {
	allBooks: [],
	favoriteBooks: []
};

export const allBooksReducer = (
	state = defaultState,
	action: BaseActionsWithPayload<AllBooksTypes, IBook[] | IBook | string>
) => {
	switch (action.type) {
		case AllBooksTypes.SET_BOOKS:
			if (Array.isArray(action.payload)) {
				return {
					...state,
					allBooks: [ ...action.payload.map((book) => ({ ...book, isFavourite: false })) ]
				};
			}
			return state;
		case AllBooksTypes.ADD_TO_FAVOURITE:
			return {
				...state,

				allBooks: state.allBooks.map(
					(book) => (action.payload === book ? { ...book, isFavourite: true } : book)
				),
				favoriteBooks: [ ...state.favoriteBooks, { ...action.payload as IBook, isFavorite: true } ]
			};
		case AllBooksTypes.DELETE_FROM_FAVOURITE:
			return {
				...state,

				allBooks: state.allBooks.map(
					(book) => (action.payload === book ? { ...book, isFavourite: false } : book)
				),

				favoriteBooks: state.favoriteBooks.filter((book) => book.isbn13 !== action.payload)
			};
		default:
			return state;
	}
};
