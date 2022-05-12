import React, { Component, useContext, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Table } from "reactstrap";
import { ContextCarta } from "../contexts/CartaContext";

export default function ListaCartas() {
  const { cartas, consultarTodos, deletarCarta } = useContext(ContextCarta)

  let { deckID } = useParams()

  useEffect(() => {
    consultarTodos(deckID)
  }, [])

  if (!cartas)
    return (
      <div>Erro: Cartas não puderam ser lidas.</div>
    );
  return (
    <div>
      <h2 className="text-center" style={{ padding: '1em' }}> Lista de Cartas </h2>
      <div style={{ textAlign: 'left' }}>
        <Link to={`/deck/${deckID}/criarCarta`}>
          <Button className="btn btn-success"> Adicionar Carta </Button>
        </Link>
      </div>
      <Row>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th> Nome </th>
              <th> Edição </th>
              <th> Idioma </th>
              <th> Foil </th>
              <th> Preço </th>
              <th> Quantidade </th>
            </tr>
          </thead>
          <tbody>
            {cartas.map((carta) => (
              <tr key={carta.id}>
                <td> {carta.nome} </td>
                <td> {carta.edicao} </td>
                <td> {carta.idioma} </td>
                <td> {carta.foil ? "Sim" : "Não"} </td>
                <td> {carta.preco.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' })} </td>
                <td> {carta.quantidade} </td>
                <td>
                  <Link to={`/deck/${deckID}/alterarCarta/${carta.id}`}>
                    <button className="btn btn-primary"> Atualizar Carta </button>
                  </Link>
                  <button style={{ marginLeft: '1em' }} className='btn btn-danger' onClick={() => deletarCarta(carta.id) && window.location.reload()}> Deletar </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Link to='/'>
        <Button className="btn btn-danger"> Voltar </Button>
      </Link>
    </div>
  )
}
