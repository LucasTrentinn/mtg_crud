import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Container } from 'reactstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Lista from './components/Lista';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path='/' component={Lista}></Route>
          </Switch>
        </Container>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
