import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>

            <Container>
                <Row>
                    <Col> <Link to="/">
                        Stream
                    </Link></Col>
                    <Col>  <Link to="/streams/new" className="mt-5">
                        All Streams
                    </Link></Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Button href="/streamform">
                            Create Form
                        </Button>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Header