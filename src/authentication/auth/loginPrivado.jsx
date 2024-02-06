import React from 'react';
import { Route, Redirect } from 'react-router';
import { getSession } from '../helper/helper';
import {cockieAdmin} from '../helper/helper'

const checkAuth = () => {
  return !getSession() ? false : true;
};

const LoginPrivado = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? (

          cockieAdmin ?  <Redirect to={{ pathname: '/admin', state: { from: props.location } }} />
:

          <Redirect to={{ pathname: '/inicio/principal', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};


 

export default LoginPrivado;