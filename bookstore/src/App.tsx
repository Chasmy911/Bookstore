import React from 'react';
import BookItem from './client/components/BookItem/BookItem';
import Layout from './client/Layout/Layout';
import AllBook from './pages/AllBook/AllBook';
import { ThemeProvider } from 'styled-components';
import { useTypedSelector } from './store/hooks/useTypedSelector';
import { CreateTheme } from './style/theme';

function App() {
	const userTheme = useTypedSelector((state) => state.theme.themeMode);
	const currentTheme = CreateTheme(userTheme);

	return (
		<ThemeProvider theme={currentTheme}>
			<div className="App">
				<Layout>
					<AllBook />
				</Layout>
			</div>
		</ThemeProvider>
	);
}

export default App;
