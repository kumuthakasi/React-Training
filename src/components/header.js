import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Link to="/">Streamy</Link>
                    </Col>
                    <Col>
                        <Link to="/">All Streams</Link>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Header