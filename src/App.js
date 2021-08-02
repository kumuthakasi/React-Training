import React from 'react';
import { Router, Route } from "react-router-dom";
import StreamCreate from './components/streams/streamcreate';
import StreamDelete from './components/streams/streamdelete';
import StreamEdit from './components/streams/streamedit';
import StreamList from './components/streams/streamlist';
import StreamShow from './components/streams/streamshow';
import Header from './components/header';
import history from './history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />

        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
}

export default App;
