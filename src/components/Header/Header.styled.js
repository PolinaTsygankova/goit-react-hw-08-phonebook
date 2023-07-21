import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  height: 60px;
  background-color: #7b0000;
  margin: 0;
  padding: 0px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-family: Raleway, sans-serif;
  font-size: 23px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 1.5em;
  text-shadow: none;
  transition: text-shadow 0.2s ease-in-out;

  &:first-child {
    margin-right: 15px;
  }

  &:hover {
    text-shadow: 0px 0px 20px #fff;
  }

  &.active {
    text-decoration: 2px underline;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-family: Raleway, sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 1.5em;

  &:first-child {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  width: 200px;
  justify-content: center;
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: flex;
  fill: currentcolor;
  font-family: 'Google Sans', Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;

  &:hover {
    background: #f6f9fe;
    color: #000;
  }

  &:active {
    box-shadow: #000;
    outline: none;
  }

  &:focus {
    outline: none;
    border: 2px solid #4285f4;
  }

  &:not(:disabled) {
    box-shadow: rgb(184, 0, 0);
  }

  &:not(:disabled):hover {
    box-shadow: 1px 5px 43px -3px #000;
    -webkit-box-shadow: 1px 5px 43px -3px #000;
    -moz-box-shadow: 1px 5px 43px -3px #000;
  }

  &:not(:disabled):focus {
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }
`;
