import { Route, Routes } from 'react-router-dom'
import ListaDeck from './ListaDeck';
import CriarDeck from './CriarDeck';
import AlterarDeck from './AlterarDeck';
import ListaCartas from './ListaCartas';
import CriarCarta from './CriarCarta';
import AlterarCarta from './AlterarCarta';

export default function AppRoutes({ children }) {
  return (
    <Routes>
      <Route path='/' element={<ListaDeck />} />
      <Route path='/adicionarDeck' element={<CriarDeck />} />
      <Route path='/alterarDeck' element={<AlterarDeck />} />
      <Route path='/deck/:deckID' element={<ListaCartas />} />
      <Route path='/criarCarta' element={<CriarCarta />} />
      <Route path='/alterarCarta' element={<AlterarCarta />} />
    </Routes>
  )
}