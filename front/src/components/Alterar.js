import React, { Component } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";

export default class Alterar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Card>
              <Col>
                <h3>Update Employee</h3>
                <CardBody>
                  <Form>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>First Name:</label>
                      <input name="firstName" className='form-control'></input>
                    </FormGroup>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Last Name:</label>
                      <input name="lastName" className='form-control'></input>
                    </FormGroup>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Email ID:</label>
                      <input name="emailId" className='form-control'></input>
                    </FormGroup>
                    <Button color="success">Save</Button>
                    <Button color="danger">Cancel</Button>
                  </Form>
                </CardBody>
              </Col>
            </Card>
          </Row>
        </Container>
      </div>
    )
  }

}