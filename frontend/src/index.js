import React from 'react';
import { render } from 'react-dom';
import Home from './components';

const App = () => {
  return (
    <Home/>
  )
}

const root = document.getElementById('root');
render(<App />, root);
