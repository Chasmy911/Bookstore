import { BaseActionsWithPayload, IBook } from '../../types';
import { CartBookTypes } from './CartBookActions';

type DefaultStateType = {
	cartBooks: IBook[];
};

const defaultState: DefaultStateType = {
	cartBooks: []
};

export const cartBooksReducer = (state = defaultState, action: BaseActionsWithPayload<CartBookTypes, IBook>) => {
	switch (action.type) {
		case CartBookTypes.ADD_BOOK:
			return {
				...state,
				cartBooks: [ ...state.cartBooks, action.payload ]
			};

		case CartBookTypes.DELETE_BOOK:
			const cartArr = state.cartBooks.filter((bookId) => bookId != action.payload);
			return {
				...state,
				cartBooks: [ ...cartArr ]
			};

		default:
			return state;
	}
};
