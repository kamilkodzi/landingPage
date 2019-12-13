import React from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert'

function App() {
  return (
    <div>
    <h1>Startup Page</h1>
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
