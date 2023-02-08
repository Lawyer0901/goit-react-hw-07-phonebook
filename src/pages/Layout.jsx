import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
export const Layout = () => {
  return (
    <>
      <Title>Enter phone number and name of the contact</Title>

      <Outlet />
    </>
  );
};

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #07c;
`;
