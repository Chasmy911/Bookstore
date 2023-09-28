import { ILogInUserData, ISignUpUserData } from '../../types';
import { user } from '../utils/http';

export const UserApi = {
	signUpUser: (userData: ISignUpUserData) => user.post('/auth/users/', userData),
	activateUserAccount: (uid: string, token: string) =>
		user.post('/auth/users/activation/', { uid: uid, token: token }),
	loginUser: ({ email, password }: ILogInUserData) => user.post('/auth/jwt/create/', { email, password }),
	fetchUserInfo: (token: string) =>
		user.get('/auth/users/me/', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}),
	virifyToken: (token: string) => user.post('/auth/jwt/verify/', { token }),
	refreshToken: (token: string) => user.post('/auth/jwt/refresh/', { refresh: token })
};
