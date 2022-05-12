import React, { createContext, useState } from "react";
import { api } from "../api";

export const ContextCarta = createContext()

export default function CartaContext({children}) {
  const [cartas, setCartas] = useState()

  const consultarTodos = async (deckid) => {
    const res = await api.get('/cartas', {
      params: {
        id: deckid
      }
    })
    setCartas(res.data)
  }

  const adicionarCarta = async (nome, edicao, idioma, foil, preco, qtd, deckid) => {
    const res = await api.post('/cartas', {nome: nome, edicao: edicao, idioma: idioma, foil: foil, preco: preco, quantidade: qtd, DeckId: deckid})
    setCartas(res.data)
  }

  const alterarCarta = async (id, preco, qtd) => {
    const res = await api.put(`/cartas/${id}`, {preco: preco, quantidade: qtd})
    setCartas(res.data)
  }

  const deletarCarta = async (id) => {
    await api.delete(`/cartas/${id}`)
  }

  return(
    <div>
      <ContextCarta.Provider value={{cartas, setCartas, consultarTodos, adicionarCarta, alterarCarta, deletarCarta}}>
        {children}
      </ContextCarta.Provider>
    </div>
  )
}