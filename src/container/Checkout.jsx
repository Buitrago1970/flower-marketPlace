import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/index';

import '../styles/components/Checkout.css';
const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleDeleteItem = (item, i) => {
    removeFromCart(item, i);
  };
  return (
    <>
      <Helmet
        title="Checkout"
        description="Venta de flores Medicinales originarias de Colombia mas de 40mil especies de plantas."
        url="https://plantas-el-camello.firebaseapp.com/checkout"
      />
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? (
            <div className="container-title-checkout">
              <h3>Lista de Pedidos</h3>
            </div>
          ) : (
            <>
              <h3>No has agregado ningun pedido</h3>
              <Link to={'/'}>
                <button type="button">Ir al HOME</button>
              </Link>
            </>
          )}
          {cart.map((item, i) => (
            <div className="container-items">
              <div className="Checkout-item" key={i}>
                <div className="Checkout-element">
                  <div className="containerImg">
                    <img className="" src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                  </div>
                  <span className="price">{`$${item.price}`}</span>
                </div>
                <button
                  onClick={() => handleDeleteItem(item, i)}
                  type="button"
                  title="Eliminar"
                >
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3 className="title-price">{`Precio Total: $${handleSumTotal(
              cart
            )}`}</h3>
            <Link to={'/checkout/info'}>
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
