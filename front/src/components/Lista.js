import React, { Component } from "react";
import { Button, Row, Table } from 'reactstrap'

export default class Lista extends Component {
  render() {
    return(
      <div>
        <h2 className="text-center" style={{padding: '1em'}}> Lista de Decks </h2>
        <div style={{textAlign: 'left'}}>
          <Button className="btn btn-success"> Adicionar Deck </Button>
        </div>
        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th> Classe 1 </th>
                <th> Classe 2 </th>
                <th> Classe 3 </th>
                <th> Classe 4 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> Teste 1 </td>
                <td> Teste 2 </td>
                <td> Teste 3 </td>
                <td> 
                  <button className="btn btn-primary">Update</button>
                  <button style={{marginLeft: '1em'}} className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </div>
    )
  }
}
