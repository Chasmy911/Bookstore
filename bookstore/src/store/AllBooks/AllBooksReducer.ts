import { BaseActionsWithPayload, IBook } from '../../types';
import { AllBooksTypes } from './AllBooksActions';

type defaultStateType = {
	allBooks: IBook[];
	cartBooks: IBook[];
	favoriteBooks: IBook[];
};

const defaultState: defaultStateType = {
	allBooks: [],
	cartBooks: [],
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

		case AllBooksTypes.ADD_BOOK_TO_CART:
			return {
				...state,

				allBooks: state.allBooks.map((book) => (action.payload === book ? { ...book, amount: 1 } : book)),
				cartBooks: [ ...state.cartBooks, { ...action.payload as IBook, amount: 1 } ]
			};
		case AllBooksTypes.REMOVE_BOOK_FROM_CART:
			const cartArr = state.cartBooks.filter((book) => book.isbn13 !== action.payload);
			return {
				...state,
				cartBooks: [ ...cartArr ]
			};
		default:
			return state;
	}
};
