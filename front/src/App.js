import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'reactstrap';
import Alterar from './components/Alterar';
import Criar from './components/Criar';
import Footer from './components/Footer';
import Header from './components/Header';
import Lista from './components/Lista';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        {/* <Lista /> */}
        {/* <Criar/> */}
        {/* <Alterar/> */}
        <Container>
          <Routes>
            <Route path='/' exact component={Lista}/>
            <Route path='/criarDeck' component={Criar}/>
            <Route path='/alterar' component={Alterar} />
          </Routes>
        </Container>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
