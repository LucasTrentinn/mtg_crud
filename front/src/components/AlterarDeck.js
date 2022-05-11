import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";

export default class AlterarDeck extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Card>
              <Col>
                <h3>Atualizar Deck</h3>
                <CardBody>
                  <Form>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Novo nome:</label>
                      <input name="nome" className='form-control'></input>
                    </FormGroup>
                    <Button color="success">Save</Button>
                    <Link to='/'>
                      <Button color="danger">Cancel</Button>
                    </Link>
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