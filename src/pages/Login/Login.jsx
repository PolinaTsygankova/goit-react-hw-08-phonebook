import { useState } from 'react';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  function handleInput(e) {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    //dispatch
    console.log({ name, email });
    setName('');
    setEmail('');
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Log In</Title>

        <Text>Name</Text>
        <Label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleInput}
          />
        </Label>

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
