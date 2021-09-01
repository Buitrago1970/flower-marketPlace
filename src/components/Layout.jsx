import React from 'react';

import '../styles/components/Layout.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Hero from './Hero.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <div className="Main">
        <Header />
        <Hero />
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
