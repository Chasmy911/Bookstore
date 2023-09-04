import { RootState } from '..';

const namespace = 'allBooks';

export const allBooksSelectors = {
	getAllBooks: (state: RootState) => state[namespace].allBooks
};
