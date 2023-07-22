import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
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
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleInput(e) {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(login({ email, password }));

    setPassword('');
    setEmail('');
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Log In</Title>

        <Text>Email</Text>
        <Label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleInput}
          />
        </Label>

        <Text>Password</Text>
        <Label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={handleInput}
          />
        </Label>

        <SubmitButton type="submit">Log In</SubmitButton>
        <SignUpLink>
          Don't have an account?
          <StyledNavLink to="/register">Sign Up</StyledNavLink>
        </SignUpLink>
      </LoginForm>

      <LoginFormContainer />
    </LoginContainer>
  );
};
