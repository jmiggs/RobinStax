/* eslint-disable import/extensions */
import {
  // Route,
  // Redirect,
  Switch,
  // Link,
  // HashRouter
} from 'react-router-dom';


import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';
import { AuthRoute, InitRoute } from '../util/route_util';


const App = () => (


  <div className="flex-container">

    <div id="background">
      {/* <img src="http://fairhomeoffernc.com/wp-content/uploads/2017/01/Background-Hipster-Holding-House-Money.png"/> */}

      {/* <div className="form-background"> */}
    </div>

    <div className="form-box">
      <div className="form">


        <InitRoute exact path="/" component={GreetingContainer} />


        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
      </div>
      {/* </div> */}
    </div>
  </div>

);

export default App;
