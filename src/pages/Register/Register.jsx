import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
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
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleInput(e) {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  function handleSumbit(e) {
    e.preventDefault();

    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSumbit}>
        <Title>Sign Up</Title>

        <Text>Name</Text>
        <Label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleInput}
          />
        </Label>

        <Text>Email</Text>
        <Label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleInput}
          />
        </Label>

        <Text>Password</Text>
        <Label>
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleInput}
          />
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
