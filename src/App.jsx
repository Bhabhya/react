import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './Store';

function App() {

  return (
    <div>
    <Provider store={store}>

    <Navbar></Navbar>
    <Home></Home>
      
    </Provider>
    </div>
  )
}

export default App
