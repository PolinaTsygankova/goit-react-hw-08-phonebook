import styled from 'styled-components';

export const BckgImage = styled.div`
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1556474560-501713f158a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80');
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: bottom -230px left -180px;
  width: 100%;
  height: 100vh;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Title = styled.h1`
  content: '';
  left: 650px;
  bottom: 420px;
  position: absolute;
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: 'Times New Roman', sans-serif;
  font-size: 50px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 1.5em;
`;
