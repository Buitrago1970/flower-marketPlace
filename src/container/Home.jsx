import React from 'react';
import Products from '../components/Products.jsx';
import Helmet from '../components/Helmet';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Helmet
        title=""
        description="Venta de flores Medicinales originarias de Colombia mas de 40mil especies de plantas."
        url="https://plantas-el-camello.firebaseapp.com/"
      />
      <Hero />
      <Products />
    </>
  );
}
