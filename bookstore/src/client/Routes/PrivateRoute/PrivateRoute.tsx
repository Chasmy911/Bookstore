import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';

const PrivateRoute: FC<any> = ({ children }) => {
	return children;
};

export default PrivateRoute;
