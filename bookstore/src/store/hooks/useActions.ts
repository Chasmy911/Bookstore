import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedBookAction } from '../Book/BookActions';
import { allBooksActions } from '../AllBooks/AllBooksActions';
import { getAllBooks } from '../AsyncFn/getAllBooksAsync';
import { getSelectedBookAsync } from '../AsyncFn/getBookByIdAsync';
import { toggleThemeAction } from '../Theme/ThemeActions';
import { searchAction } from '../Search/SearchActions';
import { getSearchBooksAsync } from '../AsyncFn/getSearchBookAsynk';

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(
		{
			...selectedBookAction,
			...allBooksActions,
			...toggleThemeAction,
			getAllBooks,
			getSelectedBookAsync,
			getSearchBooksAsync,
			...searchAction
		},
		dispatch
	);
};
