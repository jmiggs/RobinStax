import {
  Route,
  Redirect,
  Switch,
  // Link,
  // HashRouter
} from 'react-router-dom';

import React from 'react';
import { AuthRoute, InitRoute } from '../util/route_util';
// import App from './app';
import fourOFour from './404/404';
import Portfolio from './portfolio/portfolio'
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';


const PreApp = () => (

  <div>
    <Switch>
      <AuthRoute exact path="/portfolio/:userid" component={Portfolio} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <InitRoute exact path="/" component={GreetingContainer} />
      <Route path="*" component={fourOFour} />
      {/* <Redirect to="/404" component={fourOFour} /> */}
    </Switch>

  </div>
);

export default PreApp;