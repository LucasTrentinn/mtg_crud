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
          <Link to='/criarCarta'>
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
                  <td> {carta.preco.toLocaleString('pr-BR',{style: 'currency', currency: 'BRL'})} </td>
                  <td> {carta.quantidade} </td>
                  <td>
                    <Link to='/alterarCarta'>
                      <button className="btn btn-primary"> Atualizar Carta </button>
                    </Link>
                    <button style={{ marginLeft: '1em' }} className='btn btn-danger' onClick={() => this.context.deletarCarta(carta.id) && window.location.reload()}> Deletar </button>
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