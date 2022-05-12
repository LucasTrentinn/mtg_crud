import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Table } from 'reactstrap'
import { ContextDeck } from "../contexts/DeckContext";

export default class ListaDeck extends Component {
  static contextType = ContextDeck;

  componentDidMount() {
    this.context.consultarTodos()
  }

  render() {
    let decks = this.context.decks

    if (!decks)
      return (
        <div>Erro: Decks não puderam ser lidos.</div>
      );
    return (
      <div>
        <h2 className="text-center" style={{ padding: '1em' }}> Lista de Decks </h2>
        <div style={{ textAlign: 'left' }}>
          <Link to='/adicionarDeck'>
            <Button className="btn btn-success"> Adicionar Deck </Button>
          </Link>
        </div>
        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th> Nome </th>
              </tr>
            </thead>
            <tbody>
              {decks.map((deck) => (
                <tr key={deck.id}>
                  <td>
                    <Link to={`/deck/${deck.id}`}>
                      { deck.nome }
                    </Link>
                  </td>
                  <td>
                    <Link to={`/deck/${deck.id}/alterar`}>
                      <button className="btn btn-primary"> Atualizar Nome </button>
                    </Link>
                    <button style={{ marginLeft: '1em' }} className='btn btn-danger' onClick={() => this.context.deletarDeck(deck.id) && window.location.reload()}> Deletar </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </div>
    )
  }
}
