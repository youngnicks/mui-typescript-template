import * as React from 'react';

import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';

// Warns about potential accessibility issues with your React elements.
//
// import a11y from 'react-a11y';
// if (process.env.NODE_ENV !== 'production') {
//   a11y(React, { includeSrcNode: true, ReactDOM });
// }

const reducer = (state = {dark: false}, action) => {
  if (action.type === 'TOGGLE_THEME_SHADE') {
    return {
      ...state,
      dark: !state.dark
    };
  }
  return state;
};

export const store = createStore(reducer);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
