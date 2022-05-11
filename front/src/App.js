import { Container } from 'reactstrap';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';
import Header from './components/Header';
import CartaContext from './contexts/CartaContext';
import DeckContext from './contexts/DeckContext';

function App() {
  return (
    <div className='App'>
      <DeckContext>
        <CartaContext>
          <Header />
          <Container>
            <AppRoutes />
          </Container>
          <Footer />
        </CartaContext>
      </DeckContext>
    </div>
  );
}

export default App;
