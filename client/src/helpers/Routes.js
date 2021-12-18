import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Products from '../views/Products';

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
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  userFromDB: PropTypes.any
};

export default Routes;
