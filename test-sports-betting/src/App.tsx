import React from 'react';
import './App.css';
import { Router } from './components/Router/Router';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

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
