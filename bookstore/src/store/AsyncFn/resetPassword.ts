import { Dispatch } from 'redux';
import { UserApi } from '../../client/api/userApi';

const resetPassword = async (newPassword: string, password: string, token: string): Promise<any> => {
	return await UserApi.resetPassword(newPassword, password, token);
};

export const resetPasswordAsync = (newPassword: string, password: string, token: string) => {
	return (dispatch: Dispatch) => {
		resetPassword(newPassword, password, token).then((data) => console.log(data));
	};
};

// export const getAllBooks = () => {
// 	return (dispatch: Dispatch) => {
// 		resetPassword().then((data) => dispatch(allBooksActions.setBooks(data.data.books)));
// 	};
// };
