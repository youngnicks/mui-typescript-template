import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';

export default (rootEpic, rootReducer) => {
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const composeEnhancers = composeWithDevTools({
    // Actions like actionSanitizer, stateSanitizer
  });
  const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  const store = configureStore({});

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      // Enable webpack hot module replacement for reducers
      module.hot.accept('./index', () => {
        const nextRootReducer = require('./index').rootReducder;
        store.replaceReducer(nextRootReducer);
      });
    }
  }

  return store;
};
