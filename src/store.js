import thunk from 'redux-thunk';
import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit'

export default function(preloadedState) {
  const store = configureStore({
    reducer: reducer,
    middleware: [thunk],
    preloadedState
  })
  
  if(process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(reducer));
  }
  return store;
}