import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../action/action';

class Data extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>Data</div>
        )
    }
}

export default connect(null, { fetchPosts })(Data);