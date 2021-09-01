import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import '../styles/components/Header.css';

export default function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="Header">
      <Link to={'/'}>
        <h1 className="Header-title">Anda Shop</h1>
      </Link>
      <Link to={'/Checkout'}>
        <div className="Header-checkout">
          <FiShoppingCart />
          {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
        </div>
      </Link>
    </div>
  );
}
