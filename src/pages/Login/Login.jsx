import React from 'react';
import {
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  SignUpLink,
  Title,
  Label,
  Text,
  SubmitButton,
  StyledNavLink,
} from './Login.styled';

export const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <Title>Log In</Title>

        <Text>Name</Text>
        <Label>
          <input type="text" required />
        </Label>

        <Text>Email</Text>
        <Label>
          <input type="email" required />
        </Label>

        <Text>Password</Text>
        <Label>
          <input type="password" required />
        </Label>

        <SubmitButton type="submit">Log In</SubmitButton>
        <SignUpLink>
          Don't have an account?{' '}
          <StyledNavLink to="/register">Sign Up</StyledNavLink>
        </SignUpLink>
      </LoginForm>

      <LoginFormContainer />
    </LoginContainer>
  );
};
