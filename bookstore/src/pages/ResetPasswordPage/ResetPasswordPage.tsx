import React, { useEffect, useState } from 'react';
import { Container, SignUpWrapper, StyledButton, StyledStr, Title, TitleWrapper } from './styles';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import { UserApi } from '../../client/api/userApi';
import ResetPasswordForm from '../../client/components/ResetPassword/ResetPassword';
import ResetPasswordConfirmForm from '../../client/components/ResetPasswordConfirm/ResetPasswordConfirm';

enum ResetStatus {
	SUCCESS = 204
}

const ResetPasswordPage = () => {
	const { uid, token } = useParams();
	console.log(uid);
	console.log(token);

	const [ resetStatus, setResetStatus ] = useState<number | null>(null);

	const navigate = useNavigate();

	const userInfo = useTypedSelector((state) => state.signUpData.signUpData);
	return (
		<Container>
			{uid === undefined && token === undefined ? <ResetPasswordForm /> : <ResetPasswordConfirmForm />}
		</Container>
	);
};

export default ResetPasswordPage;
