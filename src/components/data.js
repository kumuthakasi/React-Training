import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../action/action';
import { Card } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Data extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderList() {
        return this.props.posts.map((postdata, i) => {
            return (
                <div className="w-75 m-auto" key={i}>
                    <Card>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col sm="1">
                                        <FaUser />

                                    </Col>
                                    <Col sm="11">
                                        <h3>{postdata.title}</h3>
                                        <div>{postdata.body}</div>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>

                </div>
            )
        })
    }
    render() {
        return (
            <div>{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.postsData }
}
export default connect(mapStateToProps, { fetchPosts })(Data);