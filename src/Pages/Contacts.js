import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{width: '500px'}}>
        <h1 className='text-center'>Contact us</h1>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter Email'/>
            <Form.Text>We will not share your email with anyone else</Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Textarea</Form.Label>
            <Form.Control rows='3' as='textarea'/>
          </Form.Group>

          <Form.Group controlId='formBasicCheckbox'>
            <Form.Label>Textarea</Form.Label>
            <Form.Check type='checkbox' label='Check me out'/>
          </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }
}

// export default Contacts;
