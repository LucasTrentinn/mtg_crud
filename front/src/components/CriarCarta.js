import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { ContextCarta } from "../contexts/CartaContext";

export default class CriarCarta extends Component {
  static contextType = ContextCarta;

  componentDidMount() {
    this.context.consultarTodos()
  }

  render() {
    return(
      <div>
        <Container>
          <Row>
            <Card>
              <Col>
                <h3> Adicionar carta </h3>
                <CardBody>
                  <Form>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Nome da Carta:</label>
                      <input name="nome" className="form-control"></input>
                    </FormGroup>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Edição da Carta:</label>
                      <input name="edicao" className="form-control"></input>
                    </FormGroup>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Idioma da Carta:</label>
                      <input name="idioma" className="form-control"></input>
                    </FormGroup>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>É foil?</label>
                      <input name="foil" className="form-control"></input>
                    </FormGroup>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Preço da Carta:</label>
                      <input name="preco" className="form-control"></input>
                    </FormGroup>
                    <FormGroup style={{ padding: "1em" }}>
                      <label>Quantidade da Carta no Deck:</label>
                      <input name="quantidade" className="form-control"></input>
                    </FormGroup>
                    <Button type="submit" className="btn btn-success" onClick={() => this.context.adicionarCarta()}>Save</Button>
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