import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import Login from './components/login';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <h1>Application</h1>
      <Dashboard />
    </div>
  );
}

export default App;
