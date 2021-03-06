import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../container/Home';
import Checkout from '../container/Checkout.jsx';
import Info from '../container/Info';
import Payment from '../container/Payment';
import Success from '../container/Success';
import NotFound from '../container/NotFound';
import Layout from '../components/Layout.jsx';
import Appcontext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

export default function App() {
  const InitialState = useInitialState();

  return (
    <Appcontext.Provider value={InitialState}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/info" component={Info} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Appcontext.Provider>
  );
}
