import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import { loadState, saveState } from '../config/localStorage';

const persistedState = loadState();

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(() => {
  const toLocalStorage = { ...store.getState() };
  if (toLocalStorage.search) delete toLocalStorage.search;

  saveState({
    ...toLocalStorage,
  });
});

export default store;
