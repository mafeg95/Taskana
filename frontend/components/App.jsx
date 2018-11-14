import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  
  return (
    <div>
      <header>
        <SplashContainer />
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
