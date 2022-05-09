import React, { Component } from "react";
import { Button, Row, Table } from 'reactstrap'

export default class Lista extends Component {
  
  render() {
    return(
      <div>
        <h2 className="text-center" style={{padding: '1em'}}> Lista de Decks </h2>
        <div style={{textAlign: 'left'}}>
          <Button color="primary"> Adicionar Deck </Button>
        </div>
        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th> Teste 1 </th>
                <th> Teste 2 </th>
                <th> Teste 3 </th>
                <th> Teste 4 </th>
              </tr>
            </thead>
            <tbody>
              {
                
              }
            </tbody>
          </Table>
        </Row>
      </div>
    )
  }
}
