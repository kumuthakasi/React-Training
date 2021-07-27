import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import Prefer from './components/prefer';
import Login from './components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/Prefer">
            <Prefer />
          </Route>
        </Switch>

      </BrowserRouter>


    </div>
  );
}

export default App;
