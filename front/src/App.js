import { Container } from 'reactstrap';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';
import Header from './components/Header';
import DeckContext from './contexts/DeckContext';

function App() {
  return (
    <div className='App'>
      <DeckContext>
        <Header />
        <Container>
          <AppRoutes />
        </Container>
        <Footer />
      </DeckContext>
    </div>
  );
}

export default App;
