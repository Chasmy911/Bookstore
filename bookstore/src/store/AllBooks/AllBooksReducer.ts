import { BaseActionsWithPayload, IBook } from '../../types';
import { AllBooksTypes } from './AllBooksActions';

type defaultStateType = Record<string, IBook[]>;

const defaultState: defaultStateType = {
	allBooks: [],
	favouriteBooks: []
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
					(book) => (book.isbn13 === action.payload ? { ...book, isFavourite: !book.isFavourite } : book)
				)
			};

		default:
			return state;
	}
};
