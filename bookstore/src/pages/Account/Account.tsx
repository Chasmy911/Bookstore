import React from 'react';
import { IAccountData } from '../../types';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import {
	ButtonContainer,
	ProfileContainer,
	StyledButton,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledWhiteButton,
	SybTitle,
	Title,
	Wrapper
} from './style';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';

const Account = () => {
	const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm<
		IAccountData
	>({
		defaultValues: {
			name: 'userInfo?.username',
			email: 'userInfo?.email'
		}
	});

	React.useEffect(
		() => {
			if (formState.isSubmitSuccessful) {
				reset({
					name: '',
					email: '',
					password: '',
					newPassword: '',
					confirmNewPassword: ''
				});
			}
		},
		[ formState, reset ]
	);

	const submit: SubmitHandler<IAccountData> = (data) => {
		console.log(data);
	};

	const error: SubmitErrorHandler<IAccountData> = (data) => {
		console.log(data);
	};

	return (
		<Wrapper>
			<NavLink to="/">
				<IconButton>
					<KeyboardBackspace />
				</IconButton>
			</NavLink>
			<Title>Account</Title>
			<StyledForm onSubmit={handleSubmit(submit, error)}>
				<SybTitle>Profile</SybTitle>
				<ProfileContainer>
					<StyledLabel>
						Name
						<StyledInput
							{...register('name', { required: true })}
							placeholder="Your name"
							type="text"
							autoComplete="on"
						/>
					</StyledLabel>
					<StyledLabel>
						Email
						<StyledInput
							{...register('email', { required: true })}
							placeholder="Your email"
							type="email"
							autoComplete="on"
						/>
					</StyledLabel>
				</ProfileContainer>
				<SybTitle>Password</SybTitle>
				<StyledLabel>
					Password
					<StyledInput
						{...register('password', { required: true })}
						placeholder="Your password"
						type="password"
						autoComplete="off"
					/>
				</StyledLabel>

				<ProfileContainer>
					<StyledLabel>
						New password
						<StyledInput
							{...register('newPassword', { required: true })}
							placeholder="New password"
							type="password"
							autoComplete="off"
						/>
					</StyledLabel>
					<StyledLabel>
						Confirm new password
						<StyledInput
							{...register('confirmNewPassword', { required: true })}
							placeholder="Confirm new password"
							type="password"
							autoComplete="off"
						/>
					</StyledLabel>
				</ProfileContainer>
				<ButtonContainer>
					<StyledButton type="submit">Save changes</StyledButton>
					<StyledWhiteButton type="submit">Cancel</StyledWhiteButton>
				</ButtonContainer>
			</StyledForm>
		</Wrapper>
	);
};

export default Account;
