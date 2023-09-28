import { RootState } from '..';

const namespace = 'signUpData';

export const allBooksSelectors = {
	getUSerInfoSelector: (state: RootState) => state[namespace].SignUpData,
	isSignUpSuccessful: (state: RootState) => state[namespace].isSignUpSuccessful
};
