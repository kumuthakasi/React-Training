import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { selectSong } from '../actions/actions';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
class Songlist extends React.Component {
    renderList() {
        return this.props.songs.map((song, i) => {
            return (

                <div key={i} className="mt-4">
                    <Container>
                        <Row>
                            <Col sm='4' className="m-2" ><div>{song.title}</div></Col>
                            <Col sm='4'><div><Button onClick={() => this.props.selectSong(song)}>Select</Button></div></Col>
                        </Row>
                    </Container>
                </div>

            );
        });
    }

    render() {

        return (
            <div>{this.renderList()}</div>
            // <div>Song List</div>
        )
    }
}

const mapStateToProps = state => {
    return { songs: state.songs }
}
export default connect(mapStateToProps, { selectSong })(Songlist);