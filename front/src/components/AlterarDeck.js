import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { ContextDeck } from "../contexts/DeckContext";

export default function AlterarDeck() {
  const { alterarDeck } = useContext(ContextDeck)

  const [nome, setNome] = useState()

  let { deckID } = useParams()

  function handleClick() {
    if(!nome)
      return

    alterarDeck(deckID, nome)
  }

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
                    <input name="nome" className='form-control' onChange={e => setNome(e.target.value)} required></input>
                  </FormGroup>
                  <Button type="submit" className="btn btn-success" onClick={() => handleClick()}>Salvar</Button>
                  <Link to='/'>
                    <Button color="danger">Voltar</Button>
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
