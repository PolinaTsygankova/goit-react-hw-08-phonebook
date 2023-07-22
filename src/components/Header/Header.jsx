import React from 'react';
import {
  HeaderStyled,
  Container,
  StyledNavLink,
  // Text,
  // Button,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <StyledNavLink to="/">Home</StyledNavLink>

        {/* <StyledNavLink to="/contacts">Contacts</StyledNavLink> */}
      </Container>
      <Container>
        {/* <Text>Welcome, User!</Text>
        <Button>Log out</Button> */}

        <StyledNavLink to="/login">Log In</StyledNavLink>
        <StyledNavLink to="/register">Register</StyledNavLink>
      </Container>
    </HeaderStyled>
  );
};
