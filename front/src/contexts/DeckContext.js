import React, { createContext, useState } from 'react'
import { api } from '../api'

export const Context = createContext()

export default function DeckContext({children}) {
  const [decks, setDecks] = useState()

  const consultarTodos = async () => {
    const res = await api.get('/decks')
    setDecks(res.data)
    console.log(decks)
  }

  return(
    <div>
      <Context.Provider value={{decks, consultarTodos}}>
        {children}
      </Context.Provider>
    </div>
  )

}