import React, { Component } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";


export default class Criar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Card>
              <Col>
                <h3> Adicionar deck </h3>
                <CardBody>
                  <Form>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Teste 1:</label>
                      <input name="firstName" className='form-control'></input>
                    </FormGroup>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Teste 2:</label>
                      <input name="lastName" className='form-control'></input>
                    </FormGroup>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Teste 3:</label>
                      <input name="emailId" className='form-control'></input>
                    </FormGroup>
                    <Button className="btn btn-success">Save</Button>
                    <Button className='btn btn-danger'>Cancel</Button>
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