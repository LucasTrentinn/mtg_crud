import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";

export default class AlterarCarta extends Component {
  render() {
    return(
      <div>
        <Container>
          <Row>
            <Card>
              <Col>
                <h3>Atualizar Carta</h3>
                <CardBody>
                  <Form>
                    <FormGroup style={{padding: '1em'}}>
                      <label>Novo preço da carta:</label>
                      <input name="preco" className="form-control"/>
                    </FormGroup>
                    <FormGroup style={{padding: '1em'}}>
                      <label>Nova quantidade da carta no deck:</label>
                      <input name="quantidade" className="form-control"/>
                    </FormGroup>
                    <Button color="success">Salvar</Button>
                    <Link to='/'>
                      <Button color="danger"> Cancelar </Button>
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