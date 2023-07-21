// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './../Header/Header';

export const Layout = () => {
  return (
    <div>
      <Header></Header>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};
