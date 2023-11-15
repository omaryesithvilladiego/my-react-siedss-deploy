import React from 'react';
import { Route, Redirect } from 'react-router';
import { getSessionAdmin } from '../helper/helper';

const checkAuth = () => {
  return !getSessionAdmin() ? true : false;
};

const AdminAuth = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? (
          <Redirect to={{ pathname: '/inicio', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AdminAuth