import { RootState } from '..';

const namespace = 'allBooks';

export const allBooksSelectors = {
	getAllBooksSelector: (state: RootState) => state[namespace].allBooks,
	getAllFavoriteSelector: (state: RootState) => state[namespace].favoriteBooks
};
