import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // include to activate bootstrap

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import MainNavbar from './components/MainNavbar';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainNavbar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
