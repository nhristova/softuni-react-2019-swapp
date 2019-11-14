import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

// Move this to componetn
import 'react-svg-radar-chart/build/css/index.css';
import './App.css';
import client from './client';
import { Home } from './pages';

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
