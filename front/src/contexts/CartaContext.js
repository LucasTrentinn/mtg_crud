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


  const sortAlfMaior = async (deckid) => {
    const res = await api.get('/cartas', {
      params: {
        id: deckid
      }
    })
    setCartas([...res.data].sort((a,b)=>a.nome.localeCompare(b.nome)))
  }

  const sortAlfMenor = async (deckid) => {
    const res = await api.get('/cartas', {
      params: {
        id: deckid
      }
    })
    setCartas([...res.data].sort((a,b)=>a.nome.localeCompare(b.nome)).reverse())
  }

  const sortPrecoMenor = async (deckid) => {
    const res = await api.get('/cartas', {
      params: {
        id: deckid
      }
    })
    setCartas([...res.data].sort((a,b)=> a.preco - b.preco))
  }

  const sortPrecoMaior = async (deckid) => {
    const res = await api.get('/cartas', {
      params: {
        id: deckid
      }
    })
    setCartas([...res.data].sort((a,b)=> a.preco - b.preco).reverse())
  }

  return(
    <div>
      <ContextCarta.Provider value={{cartas, setCartas, consultarTodos, sortAlfMaior, sortAlfMenor, sortPrecoMaior, sortPrecoMenor, adicionarCarta, alterarCarta, deletarCarta}}>
        {children}
      </ContextCarta.Provider>
    </div>
  )
}