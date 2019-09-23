import React from 'react';
import Player from './Player'
import Header from './Header'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Container>
          <Row>
            <Col sm={6}>
              <Player />
            </Col>
          </Row>
        </Container>  
      </header>
    </div>
  );
}

export default App;
