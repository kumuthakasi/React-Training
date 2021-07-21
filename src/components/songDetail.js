import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedDetail }) => {
    if (!selectedDetail) {
        return <div className="mt-3"> <b>Select Song</b></div>
    }
    return (<div className="mt-3">
        <h3>Selected Song Details</h3>
        <div><b>Song Title:</b>{selectedDetail.title}</div>
        <div><b>Song Duration:</b>{selectedDetail.duration}</div>
    </div>
    )
}

const mapStateToProps = state => {
    return { selectedDetail: state.selectedSong };
}
export default connect(mapStateToProps)(SongDetail)