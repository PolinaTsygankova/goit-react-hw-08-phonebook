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
} from './Register.styled';

export const Register = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <Title>Sign Up</Title>

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

        <SubmitButton type="submit">Sign up</SubmitButton>
        <SignUpLink>
          Already have an account?
          <StyledNavLink to="/login"> Log in</StyledNavLink>
        </SignUpLink>
      </LoginForm>

      <LoginFormContainer />
    </LoginContainer>
  );
};
