import { RootState } from '..';

const namespace = 'cartBooks';

export const allBooksSelectors = {
	getCartBooksSelector: (state: RootState) => state[namespace].cartBooks
};
