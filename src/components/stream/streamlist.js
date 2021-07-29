import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStream();
    }
    renderList() {
        return this.props.stream.map(str => {
            return (
                <div className="ml-5" key={str.id}>

                    <Container>
                        <Row>
                            <Col> <p>{str.id}</p>
                            </Col>
                            <Col>    <div>{str.title}</div>

                            </Col>
                        </Row>

                    </Container>
                </div>
            )
        })
    }
    render() {
        return (
            <div> {this.renderList()}</div>
        )
    }
}
const mapStateToProps = (state) => {
    return { stream: state }
}
export default connect(mapStateToProps, { fetchStream })(StreamList);

