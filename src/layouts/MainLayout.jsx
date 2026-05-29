import React from 'react';
import Header1 from '../components/layout/Header1';
import Footer1 from '../components/layout/Footer1';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header1 />
      <main>
        <Outlet />
      </main>
      <Footer1 />
    </>
  );
};

export default MainLayout;
