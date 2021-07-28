import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import StreamList from './stream/streamlist'
import StreamCreate from './stream/streamcreate'
import Header from './header';

class Dashboard extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />

                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                {/* <Route path="/streams/edit/:id" exact component={StreamEdit} />
//     <Route path="/streams/delete/:id" exact component={StreamDelete} />
//     <Route path="/streams/:id" exact component={StreamShow} /> */}

            </BrowserRouter>
            // <div>Dashboard</div>
        )
    }
}
export default Dashboard