import { RootState } from '..';

const namespace = 'selectedBook';

export const SelectedPostSelectors = {
	getSelectedPost: (state: RootState) => state[namespace].selectedBook
};
