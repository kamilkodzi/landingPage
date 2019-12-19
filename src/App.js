import React from 'react';
import Alert from 'react-bootstrap/Alert'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import LandingJumbotron from './LandingJumbotron';
import AboutUs from './AboutUs';

function App() {
  return (
    <div>
      <LandingJumbotron/>
      <AboutUs/>
    <h1 className="HeaderClass"><FontAwesomeIcon icon={faHome} />Startup Page</h1>
    {
      [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))
    }
    </div>
  );
}

export default App;
