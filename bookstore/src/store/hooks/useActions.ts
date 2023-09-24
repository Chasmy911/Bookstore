import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedBookAction } from '../Book/BookActions';
import { allBooksActions } from '../AllBooks/AllBooksActions';
import { getAllBooks, getSearchBooks } from '../AsyncFn/getAllBooksAsync';
import { getSelectedBookAsync } from '../AsyncFn/getBookByIdAsync';
import { toggleThemeAction } from '../Theme/ThemeActions';

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(
		{
			...selectedBookAction,
			...allBooksActions,
			...toggleThemeAction,
			getAllBooks,
			getSelectedBookAsync,
			getSearchBooks
		},
		dispatch
	);
};
