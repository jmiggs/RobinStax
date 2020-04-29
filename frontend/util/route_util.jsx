import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

//this is for protecting routes, "AuthRoutes"

// the connect fx is givint const Auth the arguments it needs from mSTP.
// Auth is then using the loggedIn return boolean to decide to render, or redirect

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  
  return (
    <Route path={path} exact={exact}
      render={ props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }/>
  )
};
  
  const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id),
              currentUser: state.session.id };
  };

  const Init = ({ component: Component, path, loggedIn, exact }) => {
    
    return(
      <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      )} />
    )
};

  
  export const AuthRoute = withRouter(
    connect(
      mapStateToProps,
      null
    )(Auth)
  );

  export const InitRoute = withRouter(
    connect(
      mapStateToProps,
      null
    )(Init)
  );

