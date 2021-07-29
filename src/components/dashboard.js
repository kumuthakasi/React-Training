import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import StreamList from './stream/streamlist'
import StreamCreate from './stream/streamcreate'
import Header from './header';
import StreamForm from './stream/streamform';

class Dashboard extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streamform" component={StreamForm} />
            </BrowserRouter>
            //    <div>Dashboard</div> 
        )
    }
}
export default Dashboard