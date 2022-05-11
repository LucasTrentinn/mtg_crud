import React, { createContext, useState } from 'react'
import { api } from '../api'

export const Context = createContext()

export default function DeckContext({children}) {
  const [decks, setDecks] = useState()

  const consultarTodos = async () => {
    const res = await api.get('/decks')
    setDecks(res.data)
  }

  const adicionarDeck = async (event) => {
    const res = await api.post('/decks')
    setDecks(res.data)
    console.log(res.data)
  }

  const deletarDeck =  async (id) => {
    await api.delete(`/decks/${id}`)
  }

  return(
    <div>
      <Context.Provider value={{decks, consultarTodos, adicionarDeck, deletarDeck}}>
        {children}
      </Context.Provider>
    </div>
  )

}