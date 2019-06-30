import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'

const AppRouter = () => (
  <Router>
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 pl-0">
          <Sidebar />
        </div>
        <div className="col-10" id="main-container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default AppRouter;