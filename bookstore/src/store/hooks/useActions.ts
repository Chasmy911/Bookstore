import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedBookAction } from '../Book/BookActions';
import { allBooksActions } from '../AllBooks/AllBooksActions';
import { getAllBooks } from '../AsyncFn/getAllBooksAsync';
import { getSelectedBook } from '../AsyncFn/getBookByIdAsync';
import { toggleThemeAction } from '../Theme/ThemeActions';

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(
		{
			...selectedBookAction,
			...allBooksActions,
			...toggleThemeAction,
			getAllBooks,
			getSelectedBook
		},
		dispatch
	);
};
