import React, { useContext, useEffect } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { ContextDeck } from "../contexts/DeckContext";
import { Link } from 'react-router-dom'

export default function CriarDeck() {
  const { adicionarDeck } = useContext(ContextDeck)

  let nomeInput = React.createRef()

  function handleClick() {
    adicionarDeck(nomeInput.current.value)
  }

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
                    <input type='text' name="nome" className='form-control' ref={nomeInput} required />
                  </FormGroup>
                  <Button type="submit" className="btn btn-success" onClick={() => handleClick()}>Salvar</Button>
                  <Link to='/'>
                    <Button className='btn btn-danger'>Voltar</Button>
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