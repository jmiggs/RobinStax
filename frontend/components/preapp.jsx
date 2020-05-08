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
import MainAssetContainer from './main/asset_container'
import MainContainer from './main/main_container';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faMoneyBillWave, faSearchDollar } from '@fortawesome/free-solid-svg-icons'


//change main route later once finished
//currentlly the splash page is rendering greeting page,login at login should redirect to main later
library.add(fab, faCheckSquare, faCoffee, faMoneyBillWave, faSearchDollar)

const PreApp = () => (

  <div>
   


    <Switch>
      <InitRoute exact path="/asset/:symbol" component={MainAssetContainer} />
      <InitRoute exact path="/asset/*" component={fourOFour} />
      {/* <InitRoute exact path="/main" component={MainContainer} /> */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <InitRoute exact path="/" component={MainContainer} />
      <Route path="*" component={fourOFour} />
      {/* <Redirect to="/404" component={fourOFour} /> */}
    </Switch>

  </div>
);

export default PreApp;