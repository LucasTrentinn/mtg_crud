import {Route, Routes} from 'react-router-dom'
import { Container } from 'reactstrap';
import Alterar from './components/Alterar';
import Criar from './components/Criar';
import Footer from './components/Footer';
import Header from './components/Header';
import Lista from './components/Lista';

function App() {
  return (
    <div className='App'>
        <Header />
        <Container>
          <Routes>
            <Route path='/' exact element={<Lista />}/>
            <Route path='/adicionarDeck' element={<Criar />}/>
            <Route path='/alterarDeck' element={<Alterar />} />
          </Routes>
        </Container>
        <Footer />
    </div>
  );
}

export default App;
