import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import { handleSumTotal } from '../utils/index';
import Helmet from '../components/Helmet';

import '../styles/components/Payment.css';

export default function Payment() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart, buyer } = state;
  const Total = handleSumTotal(cart);
  const history = useHistory();
  const handleDeleteItem = (item, i) => {
    removeFromCart(item, i);
  };
  return (
    <>
      <Helmet
        title="Payment"
        description="Venta de flores Medicinales originarias de Colombia mas de 40mil especies de plantas."
        url="https://plantas-el-camello.firebaseapp.com/checkout/payment"
      />
      <div className="Payment">
        <div className="Payment-content Checkout-content">
          <div className="container-title-checkout">
            <h3>Lista de Pedidos</h3>
          </div>
          {cart.map((item, i) => (
            <div className="Checkout-item payment-item" key={i}>
              <div className="containerImg">
                <img className="" src={item.image} alt={item.title} />
              </div>
              <div className="Checkout-element">
                <h4 className="title-payment">{item.title}</h4>
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
          ))}
        </div>
        <div className="container-payment-paypal">
          <h3>{`Precio Total: $${Total}`}</h3>
          <PayPalButton
            createOrder={(data, actions, error) => {
              return actions.order.create({
                purchase_units: [
                  {
                    intent: 'CAPTURE',
                    amount: {
                      currency_code: 'USD',
                      value: Total,
                    },
                  },
                ],
              });
            }}
            onSuccess={(details, data) => {
              const newOrder = {
                buyer,
                payment: details,
                order: data,
              };
              history.push('/checkout/success');
              addNewOrder(newOrder);
              alert(
                'Transaction completed by ' + details.payer.name.given_name
              );
            }}
            options={{
              clientId: process.env.CLIENT_ID_PP,
            }}
            catchError={(error) => console.log(error)}
            onCancel={(data) =>
              alert('Ups algo salio mal, intenta nueva mente')
            }
          />
        </div>
      </div>
    </>
  );
}
