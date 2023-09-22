import React, { useState } from 'react';
import { StyledButton, StyledForm, StyledInput, StyledLabel, StyledTab, StyledWrapper } from './styles';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { ILogInUserData, ISignUpUserData } from '../../types';
import LoginForm from '../../client/components/LogInForm/LoginForm';
import SignUpForm from '../../client/components/SignUpForm/SignUpForm';

const SignIn = () => {
	const [ value, SetValue ] = useState('1');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		SetValue(newValue);
	};

	return (
		<StyledWrapper>
			<Box>
				<TabContext value={value}>
					<Box>
						<TabList
							onChange={handleChange}
							centered
							textColor="inherit"
							indicatorColor="primary"
							variant="fullWidth"
						>
							<Tab label="SIGN IN" value="1" />
							<Tab label="SIGN UP" value="2" />
						</TabList>
					</Box>
					<StyledTab value="1">
						<LoginForm />
					</StyledTab>
					<StyledTab value="2">
						<SignUpForm />
					</StyledTab>
				</TabContext>
			</Box>
		</StyledWrapper>
	);
};

export default SignIn;
