import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from './components/streams/streamcreate';
import StreamDelete from './components/streams/streamdelete';
import StreamEdit from './components/streams/streamedit';
import StreamList from './components/streams/streamlist';
import StreamShow from './components/streams/streamshow';
import Header from './components/header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
