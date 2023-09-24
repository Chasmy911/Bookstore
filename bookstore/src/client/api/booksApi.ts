import { client } from '../utils/http';

export const BooksApi = {
	getAllBooks: () => client.get('/1.0/new'),

	getSearchBooks: (search: string) => client.get(`/1.0/search/${search}`)
};
