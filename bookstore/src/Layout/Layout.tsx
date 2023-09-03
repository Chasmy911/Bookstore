import React, { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout: FC<PropsWithChildren> = () => {
	return (
		<div>
			<Header />

			<Outlet />

			<Footer />
		</div>
	);
};

export default Layout;
