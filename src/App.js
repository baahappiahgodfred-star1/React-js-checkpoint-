import React from "react";
import { Navbar, Nav, Container, Card, Button, Form } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        
        {/* navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Checkpoint</Navbar.Brand>
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* title */}
        <h2 style={{ textAlign: "center", margin: "20px" }}>
          My First React App
        </h2>

        {/* cards */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>simple text here</Card.Text>
              <Button variant="primary">Click</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>another text</Card.Text>
              <Button variant="success">Click</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>third card</Card.Text>
              <Button variant="warning">Click</Button>
            </Card.Body>
          </Card>

        </div>

        {/* form */}
        <Form style={{ width: "300px", margin: "30px auto" }}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="enter email" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>

          <Button style={{ marginTop: "10px" }} variant="dark">
            Submit
          </Button>
        </Form>

      </div>
    </>
  );
}

export default App;