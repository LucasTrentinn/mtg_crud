import Lista from './ListaDeck';
import Alterar from './AlterarDeck';
import Criar from './CriarDeck';
import { Route, Routes } from 'react-router-dom'

export default function AppRoutes({ children }) {
  return (
    <Routes>
      <Route path='/' element={<Lista />} />
      <Route path='/adicionarDeck' element={<Criar />} />
      <Route path='/alterarDeck' element={<Alterar />} />
    </Routes>
  )
}