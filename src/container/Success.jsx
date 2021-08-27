import React from 'react';
import { useHistory } from 'react-router';
import Helmet from '../components/Helmet';
import '../styles/components/Success.styl';

export default function Success() {
  const history = useHistory();
  return (
    <>
      <Helmet
        title="Success :)"
        description="Venta de flores Medicinales originarias de Colombia mas de 40mil especies de plantas."
        url="https://plantas-el-camello.firebaseapp.com/checkout/success"
      />
      <div className="success">
        <div className="container">
          <div className="row">
            <div className="modalbox success col-sm-8 col-md-6 col-lg-5 center animate">
              <div className="icon">
                <span className="glyphicon glyphicon-ok">✔</span>
              </div>
              <h1>Success!</h1>
              <h2>Juan, Gracias por tu compra</h2>
              <span>Tu pedido llegara en 3 dias a tu dirección</span>
              <button
                type="button"
                className="redo btn"
                onClick={() => {
                  history.push('/');
                }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
