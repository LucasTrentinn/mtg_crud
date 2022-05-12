import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { ContextCarta } from "../contexts/CartaContext";

export default function CriarCarta() {
  const { adicionarCarta } = useContext(ContextCarta)

  const [nome, setNome] = useState()
  const [edicao, setEdicao] = useState()
  const [idioma, setIdioma] = useState()
  const [foil, setFoil] = useState()
  const [preco, setPreco] = useState()
  const [qtd, setQtd] = useState()

  let { deckID } = useParams()

  function handleClick() {
    if(!qtd || !preco || !idioma || !edicao || !nome || preco < 0 || qtd < 1)
      return

    adicionarCarta(nome, edicao, idioma, foil, preco, qtd, deckID)
  }

  return (
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
                    <input type='text' name="nome" className="form-control" onChange={e => setNome(e.target.value)} required></input>
                  </FormGroup>
                  <FormGroup style={{ padding: "1em" }}>
                    <label>Edição da Carta:</label>
                    <input type='text' name="edicao" className="form-control" onChange={e => setEdicao(e.target.value)} required></input>
                  </FormGroup>
                  <FormGroup style={{ padding: "1em" }}>
                    <label>Idioma da Carta:</label>
                    <select className="form-select" aria-label="Default select example" onChange={e => setIdioma(e.target.value)}>
                      <option selected>  </option>
                      <option> Português </option>
                      <option> Inglês </option>
                      <option> Japonês </option>
                    </select>
                  </FormGroup>
                  <FormGroup style={{ padding: "" }} className='form-check form-switch'>
                    <label className="form-check-label" for='foil'>Marque se a carta for Foil</label>
                    <input type='checkbox' className="form-check-input" id="foil"  onChange={e => setFoil(e.target.value)}></input>
                  </FormGroup>
                  <FormGroup style={{ padding: "1em" }}>
                    <label>Preço da Carta:</label>
                    <input type='number' min='0' step='any' name="preco" className="form-control" onChange={e => setPreco(e.target.value)} required></input>
                  </FormGroup>
                  <FormGroup style={{ padding: "1em" }}>
                    <label>Quantidade da Carta no Deck:</label>
                    <input type='number' min='1' name="quantidade" className="form-control" onChange={e => setQtd(e.target.value)} required></input>
                  </FormGroup>
                  <Button type="submit" className="btn btn-success" onClick={() => handleClick()}>Salvar</Button>
                  <Link to={`/deck/${deckID}`}>
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
