import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Feed from './containers/Feed';
import './App.scss';

// const baseName = process.env.NODE_ENV === 'development' ? '/' : '/feed-example';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/:sortBy(name|name_r|date|date_r)?/:searchStr?" component={Feed} />
          <Redirect to="/name" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
