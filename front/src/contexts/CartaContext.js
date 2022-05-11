import React, { createContext, useState } from "react";
import { api } from "../api";

export const ContextCarta = createContext()

export default function CartaContext({children}) {
  const [cartas, setCartas] = useState()

  const consultarTodos = async () => {
    const res = await api.get('/cartas')
    setCartas(res.data)
  }

  const adicionarCarta = async () => {
    const res = await api.post('/cartas')
    setCartas(res.data)
  }

  const deletarCarta = async (id) => {
    await api.delete(`/cartas/${id}`)
  }

  return(
    <div>
      <ContextCarta.Provider value={{cartas, setCartas, consultarTodos, adicionarCarta, deletarCarta}}>
        {children}
      </ContextCarta.Provider>
    </div>
  )
}