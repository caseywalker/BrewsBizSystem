import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Products from '../views/Products';
import Customers from '../views/Customers';
import Quotes from '../views/Quotes';
import Orders from '../views/Orders';
import SingleQuote from '../views/SingleQuote';
import QuoteAddProducts from '../views/QuoteAddProducts';
import ConfirmOrder from '../views/ConfirmOrder';
import SingleOrder from '../views/SingleOrder';

const PrivateRoute = ({
  component: Component,
  user,
  userFromDB,
  ...rest
}) => {
  const routeChecker = (attributes) => ((user && userFromDB)
    ? (<Component {...attributes} user={user} userFromDB={userFromDB} />)
    : (<Redirect to={{ pathname: '/', state: { from: attributes.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
  userFromDB: PropTypes.any
};
function Routes({
  user,
  userFromDB
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home
          user={user}
        />} />
        <PrivateRoute
          user={user}
          userFromDB={userFromDB}
          path='/products'
          component={() => <Products
            user={user}
            userFromDB={userFromDB}
          />}
        />
        <PrivateRoute
          user={user}
          userFromDB={userFromDB}
          path='/customers'
          component={() => <Customers
            user={user}
            userFromDB={userFromDB}
          />}
        />
        <PrivateRoute
          user={user}
          userFromDB={userFromDB}
          path='/quotes'
          component={() => <Quotes
            user={user}
            userFromDB={userFromDB}
          />}
        />
        <PrivateRoute
          user={user}
          userFromDB={userFromDB}
          path='/orders'
          component={() => <Orders
            user={user}
            userFromDB={userFromDB}
          />}
        />
        <PrivateRoute
          user={user}
          userFromDB={userFromDB}
          path='/singleQuote/:quoteID'
          component={() => <SingleQuote
            user={user}
            userFromDB={userFromDB}
          />}
        />
        <PrivateRoute
          user={user}
          userFromDB={userFromDB}
          path='/quoteAddProducts/:quoteID'
          component={() => <QuoteAddProducts
            user={user}
            userFromDB={userFromDB}
          />}
        />
          <PrivateRoute
          user={user}
          userFromDB={userFromDB}
          path='/confirmOrder/:quoteID/:customerID'
          component={() => <ConfirmOrder
            user={user}
            userFromDB={userFromDB}
          />}
        />
          <PrivateRoute
          user={user}
          userFromDB={userFromDB}
          path='/orderDetails/:orderID'
          component={() => <SingleOrder
            user={user}
            userFromDB={userFromDB}
          />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  userFromDB: PropTypes.any
};

export default Routes;
