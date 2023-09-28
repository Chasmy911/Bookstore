import { BaseActionsWithPayload, ISignUpUserData } from '../../types';
import { SignUpTypes } from './SignUpActions';

type defaultStateType = {
	isSignUpSuccessful: boolean;
	SignUpData: ISignUpUserData | null;
};

const defaultState: defaultStateType = {
	isSignUpSuccessful: false,
	SignUpData: null
};

export const userInfoReducer = (
	state = defaultState,
	action: BaseActionsWithPayload<SignUpTypes, ISignUpUserData | null>
) => {
	switch (action.type) {
		case SignUpTypes.GET_SIGN_UP_DATA:
			return {
				...state,
				isSignUpSuccessful: true,
				signUpData: { ...action.payload as ISignUpUserData }
			};

		case SignUpTypes.CLEAR_SIGN_UP_DATA:
			return {
				...state,
				isSignUpSuccessful: false,
				signUpData: null
			};

		default:
			return state;
	}
};
