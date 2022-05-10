import React, { Component, useContext } from "react";
import { Button, Row, Table } from 'reactstrap'
import { Context } from "../contexts/DeckContext";

export default class Lista extends Component {
  static contextType = Context;

  componentDidMount() {
    this.context.consultarTodos()
  }

  render() {
    let decks = this.context.decks

    if(!decks)
      return(
        <div>aaa</div>
      );
    return (
      <div>
      
        <h2 className="text-center" style={{ padding: '1em' }}> Lista de Decks </h2>
        <div style={{ textAlign: 'left' }}>
          <Button className="btn btn-success"> Adicionar Deck </Button>
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
                <tr>
                  <td> {deck.nome} </td>
                  <td>
                    <button className="btn btn-primary"> Atualizar </button>
                    <button style={{ marginLeft: '1em' }} className='btn btn-danger'> Deletar </button>
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
