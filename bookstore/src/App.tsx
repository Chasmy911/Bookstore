import React from 'react';
import Layout from './client/Layout/Layout';
import AllBook from './pages/AllBook/AllBook';
import { ThemeProvider } from 'styled-components';
import { useTypedSelector } from './store/hooks/useTypedSelector';
import { CreateTheme } from './style/theme';
import { Route, Routes } from 'react-router-dom';
import { userRoutes } from './client/Routes/userRoutes';
import PrivateRoute from './client/Routes/PrivateRoute/PrivateRoute';

function App() {
	const userTheme = useTypedSelector((state) => state.theme.themeMode);
	const currentTheme = CreateTheme(userTheme);

	return (
		<ThemeProvider theme={currentTheme}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<AllBook />} />
					{userRoutes.map(({ path, Component, id, additionalProps, strict }) => {
						return (
							<Route
								path={path}
								element={
									!strict ? (
										<Component {...additionalProps} />
									) : (
										<PrivateRoute>
											<Component {...additionalProps} />
										</PrivateRoute>
									)
								}
								key={id}
							/>
						);
					})}
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
