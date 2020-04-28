import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

//this is for protecting routes, "AuthRoutes"

// the connect fx is givint const Auth the arguments it needs from mSTP.
// Auth is then using the loggedIn return boolean to decide to render, or redirect

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact}
      render={ props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }/>
  );
  
  const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
  };
  
  export const AuthRoute = withRouter(
    connect(
      mapStateToProps,
      null
    )(Auth)
  );