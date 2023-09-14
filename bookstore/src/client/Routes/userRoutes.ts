import { FC } from 'react';
import SelectedBook from '../../pages/SelectedBook/SelectedBook';
import FavoriteBooks from '../../pages/FavoriteBooks/FavoriteBooks';
import Cart from '../../pages/Cart/Cart';

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
		path: '/favotite_book',
		Component: FavoriteBooks,
		title: 'Favorite books',
		strict: true
	},

	{
		id: 4,
		path: '/cart',
		Component: Cart,
		title: 'Cart',
		strict: true
	}
];
