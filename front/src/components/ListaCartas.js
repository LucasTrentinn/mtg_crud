import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, Row, Table } from "reactstrap";
import { ContextCarta } from "../contexts/CartaContext";

export default class ListaCartas extends Component {
  static contextType = ContextCarta;

  componentDidMount() {
    this.context.consultarTodos()
  }

  render() {
    let cartas = this.context.cartas

    if (!cartas)
      return (
        <div>Erro: Cartas não puderam ser lidas.</div>
      );
    return (
      <div>
        <h2 className="text-center" style={{ padding: '1em' }}> Lista de Cartas</h2>
        <div style={{ textAlign: 'left' }}>
          <Link to='/'>
            <Button className="btn btn-success"> Adicionar Carta </Button>
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
              {cartas.map((carta) => {
                <tr>
                  <td> {carta.nome} </td>
                  <td>
                    <Link to='/'>
                      <button className="btn btn-primary"> Atualizar Carta </button>
                    </Link>
                    <button style={{marginLeft: '1em'}} className='btn btn-danger'> Deletar </button>
                  </td>
                </tr>
              })}
            </tbody>
          </Table>
        </Row>
      </div>
    )

  }

}