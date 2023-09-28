import { ISignUpUserData } from '../../types';
import { user } from '../utils/http';

export const UserApi = {
	signUpUser: (userData: ISignUpUserData) => user.post('/auth/users/', userData),
	activateUserAccount: (uid: string, token: string) =>
		user.post('/auth/users/activation/', { uid: uid, token: token })
};

// export const ativateAccountAsync = async (uid: string, token: string) => {
// 	const response = await fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
// 		method: 'POST',
// 		body: JSON.stringify({ uid, token }),
// 		headers: {
// 			'Content-type': 'application/json'
// 		}
// 	});
// 	return response.status;
// };
