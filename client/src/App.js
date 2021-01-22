import './App.css';
import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomeComponent } from './app/Home/components/HomeComponent';
import { LoginQuery } from './app/Auth/querys/LoginQuery';

import { LogoutQuery } from './app/Auth/querys/LogoutQuery';
import { SignupQuery } from './app/Auth/querys/SignupQuery';

function App() {
  
  return (
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <HomeComponent></HomeComponent>
          </Route>

          <Route path="/login" component={LoginQuery} />
          <Route path="/logout" component={LogoutQuery} />

          <Route path="/signup" component={SignupQuery} />

        </Switch>

      </BrowserRouter>
  );
}

export default App;
