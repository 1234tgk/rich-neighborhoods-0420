import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Budget from './components/budget/budget';
import Main from './components/main/main';
import Members from './components/members/members';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/"><Main /></Route>
        <Route path="/budget"><Budget /></Route>
        <Route path="/dashboard"><Members /></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;