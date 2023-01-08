import React from 'react';
import './App.css';
import { Router } from './components/Router';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
