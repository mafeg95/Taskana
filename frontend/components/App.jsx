import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => {

  return (
    <div>
      <Modal />
      <header>
        <SplashContainer />
      </header>
      <Switch>

      </Switch>
    </div>
  );
};

export default App;
