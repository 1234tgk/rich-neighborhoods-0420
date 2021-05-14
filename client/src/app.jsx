import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Budget from './components/budget/budget';
import Main from './components/main/main';
import Members from './components/members/members';
import Footer from './components/footer/footer';
import memberData from '../src/data/member';
import budgetData from '../src/data/budget';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/"><Main /></Route> */}
            <Route path="/budget"><Budget budgetData={budgetData} /></Route>
            {/* <Route path="/dashboard"><Members memberData={memberData} /></Route> */}
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;