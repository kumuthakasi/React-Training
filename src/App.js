import React from 'react';
import Songlist from './components/songList';
import SongDetail from './components/songDetail';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm='6'>
              <Songlist />
            </Col>
            <Col sm='6'>
              <SongDetail />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
