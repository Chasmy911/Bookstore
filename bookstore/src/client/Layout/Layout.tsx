import React, { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<Header />

			{children}

			<Footer />
		</div>
	);
};

export default Layout;
