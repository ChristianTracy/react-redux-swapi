import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import StarWarsApp from './components/StarWarsApp';
import {swapiReducer} from './reducers';
import {fetchData, loadMore} from './actions';

let store = createStore(
  swapiReducer,
  applyMiddleware(thunk)
);

store.dispatch(fetchData())

class App extends React.Component {
  render() {
    return <StarWarsApp store={store} />
  }
}

export default App;
