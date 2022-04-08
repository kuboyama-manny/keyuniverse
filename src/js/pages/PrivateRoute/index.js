import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({
  component: Component,
  loggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !loggedIn ? (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
};

export default connect(
  mapStateToProps
)(PrivateRoute);