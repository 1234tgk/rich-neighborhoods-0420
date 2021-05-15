import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Budget from './components/budget/budget';
import Main from './components/main/main';
import Members from './components/members/members';
import Footer from './components/footer/footer';
import memberData from '../src/data/member';
import budgetData from '../src/data/budget';
import Club from './components/club/club';
import Contributors from './components/contributors/contributors';
import Contact from './components/contact/contact';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/"><Main /></Route>
            <Route path="/budget"><Budget /></Route>
            <Route path="/members"><Members /></Route>
            <Route path="/club"><Club /></Route>
            <Route path="/contributors"><Contributors /></Route>
            <Route path="/contact"><Contact /></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;