import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import client from './client';
import Home from './Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
