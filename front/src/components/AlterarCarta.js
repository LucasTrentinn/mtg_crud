import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { ContextCarta } from "../contexts/CartaContext";

export default function AlterarCarta() {
  const { alterarCarta } = useContext(ContextCarta)

  const [preco, setPreco] = useState()
  const [qtd, setQtd] = useState()

  let { cartaID } = useParams()
  let { deckID } = useParams()

  function handleClick() {
    alterarCarta(cartaID, preco, qtd)
  }

  return (
    <div>
      <Container>
        <Row>
          <Card>
            <Col>
              <h3>Atualizar Carta</h3>
              <CardBody>
                <Form>
                  <FormGroup style={{ padding: '1em' }}>
                    <label>Novo preço da carta:</label>
                    <input name="preco" className="form-control" onChange={e => setPreco(e.target.value)}/>
                  </FormGroup>
                  <FormGroup style={{ padding: '1em' }}>
                    <label>Nova quantidade da carta no deck:</label>
                    <input name="quantidade" className="form-control" onChange={e => setQtd(e.target.value)}/>
                  </FormGroup>
                  <Button type="submit" className="btn btn-success" onClick={() => handleClick()}>Salvar</Button>
                  <Link to={`/deck/${deckID}`}>
                    <Button className="btn btn-danger"> Voltar </Button>
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
