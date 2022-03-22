import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // include to activate bootstrap
import { Container } from 'reactstrap';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import MainNavbar from './components/MainNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
