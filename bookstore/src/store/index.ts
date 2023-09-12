import { applyMiddleware, combineReducers, createStore } from 'redux';
import { allBooksReducer } from './AllBooks/AllBooksReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { secectedBookReducer } from './Book/BookReducer';
import { themeReducer } from './Theme/ThemeReducer';
import { cartBooksReducer } from './CartBook/CartBookReducer';

const rootReducers = combineReducers({
	allBooks: allBooksReducer,
	selectedBook: secectedBookReducer,
	theme: themeReducer,
	cartBooks: cartBooksReducer
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducers>;
