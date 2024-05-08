// views/groceries/index.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes';

const Groceries = () => {
  return (
    <Router>
      <Routes configKey="groceries" />
    </Router>
  );
};

export default Groceries;
