import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

export const initialState = {
  books: [
    {
      id: Math.random(),
      title: 'Quixote',
      category: 'Action'
    },
    {
      id: Math.random(),
      title: 'Hamlet',
      category: 'Biography'
    },
    {
      id: Math.random(),
      title: 'The history of the universe',
      category: 'Sci-Fi'
    },
  ]
}

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
