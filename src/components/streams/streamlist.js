import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';
import { FaCamera } from 'react-icons/fa'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }
    renderAdmin(stream) {
        return (
            <div>
                <Button className="m-2" variant="primary" type="submit" href={`/streams/edit/${stream.id}`}>Edit</Button>
                <Button variant="danger" type="submit" href={`/streams/delete/${stream.id}`}>Delete</Button>
            </div>
        )
    }
    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div key={stream.id}>
                    <Container>
                        <Row>
                            <Col sm="1">
                                <FaCamera />
                            </Col>
                            <Col sm="2">
                                <h5> <Link to={`/streams/show/${stream.id}`}>
                                    {stream.title}
                                </Link></h5>
                                <div>{stream.description}</div>
                            </Col>
                            <Col>
                                {this.renderAdmin(stream)}
                            </Col>
                        </Row>
                    </Container>

                </div>
            )
        })
    }
    renderCreate() {
        return (
            <div style={{ textAlign: 'right' }}>
                <Button variant="primary" type="submit" href={`/streams/new`}>Create Stream</Button>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <Container>
                    <Row>
                        <Col>
                            <div>{this.renderList()}</div>
                            <div className="mr-5">{this.renderCreate()}</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams) }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList)