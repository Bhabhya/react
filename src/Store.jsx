import { createStore } from 'redux'
import rootreducers from './redux/actions/reducer/Mainn'

const store= createStore(
    rootreducers
);

export default store;
