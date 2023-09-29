import { FC } from 'react';
import SelectedBook from '../../pages/SelectedBook/SelectedBook';
import FavoriteBooks from '../../pages/FavoriteBooks/FavoriteBooks';
import Cart from '../../pages/Cart/Cart';
import SignIn from '../../pages/SignIn/SignIn';
import Account from '../../pages/Account/Account';
import SignUpSuccess from '../../pages/SignUpSuccess/SignUpSuccess';

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
	},

	{
		id: 5,
		path: '/sign_in',
		Component: SignIn,
		title: 'Sign In',
		strict: false
	},

	{
		id: 6,
		path: '/account',
		Component: Account,
		title: 'Account',
		strict: true
	},
	{
		id: 6,
		path: '/sign-up/success',
		Component: SignUpSuccess,
		title: 'Sign Up Successs',
		strict: false
	},
	{
		id: 7,
		path: '/activate/:uid/:token',
		Component: SignUpSuccess,
		title: 'Succeessfully activation'
	}
];
