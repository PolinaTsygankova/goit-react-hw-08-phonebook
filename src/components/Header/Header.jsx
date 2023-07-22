import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserEmail } from './../../redux/auth/selectors';
import { useDispatch } from 'react-redux/es/exports';
import { logout } from 'redux/auth/operations';
import {
  HeaderStyled,
  Container,
  StyledNavLink,
  Text,
  Button,
} from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userEmail = useSelector(getUserEmail);

  function handleClick() {
    dispatch(logout());
  }

  return (
    <HeaderStyled>
      <Container>
        <StyledNavLink to="/">Home</StyledNavLink>

        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      </Container>
      <Container>
        {isLoggedIn ? (
          <>
            <Text>Welcome, {userEmail}!</Text>
            <Button onClick={handleClick}>Log out</Button>
          </>
        ) : (
          <>
            <StyledNavLink to="/login">Log In</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </>
        )}
      </Container>
    </HeaderStyled>
  );
};
