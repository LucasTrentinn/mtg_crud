import React, { Component } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { ContextDeck } from "../contexts/DeckContext";
import { Link } from 'react-router-dom'

export default class CriarDeck extends Component {
  static contextType = ContextDeck;

  componentDidMount() {
    this.context.consultarTodos()
  }

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
                      <label>Nome do Deck:</label>
                      <input name="name" className='form-control'></input>
                    </FormGroup>
                    <Button type="submit" className="btn btn-success" onClick={() => this.context.adicionarDeck()}>Save</Button>
                    <Link to='/'>
                      <Button className='btn btn-danger'>Cancel</Button>
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