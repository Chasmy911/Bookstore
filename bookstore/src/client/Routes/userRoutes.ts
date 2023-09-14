import { FC } from 'react';
import SelectedBook from '../../pages/SelectedBook/SelectedBook';
import FavoriteBooks from '../../pages/FavoriteBooks/FavoriteBooks';

type UserRoutes = {
	id: number;
	path: string;
	Component: FC<any>;
	additionalProps?: any;
	title: string;

	strict?: boolean;
};

export const userRoutes: UserRoutes[] = [
	{
		id: 2,
		path: '/book/:bookId',
		Component: SelectedBook,
		title: 'Book',
		strict: true
	},

	{
		id: 3,
		path: '/book/favotite_book',
		Component: FavoriteBooks,
		title: 'Favorite books',
		strict: true
	}
];
