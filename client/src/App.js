import './App.css';
import * as React from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

import { HomeComponent } from './app/Home/components/HomeComponent';

function App() {
  return (
    <Router>
      <Link to="/">
        <HomeComponent></HomeComponent>
      </Link>
    </Router>
  );
}

export default App;
