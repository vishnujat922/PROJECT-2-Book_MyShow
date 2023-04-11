import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function LayOut() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
