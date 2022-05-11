import React, { createContext, useState } from 'react'
import { api } from '../api'

export const ContextDeck = createContext()

export default function DeckContext({children}) {
  const [decks, setDecks] = useState()

  const consultarTodos = async () => {
    const res = await api.get('/decks')
    setDecks(res.data)
  }

  const adicionarDeck = async () => {
    const res = await api.post('/decks')
    setDecks(res.data)
  }

  const deletarDeck =  async (id) => {
    await api.delete(`/decks/${id}`)
  }

  return(
    <div>
      <ContextDeck.Provider value={{decks, setDecks, consultarTodos, adicionarDeck, deletarDeck}}>
        {children}
      </ContextDeck.Provider>
    </div>
  )

}