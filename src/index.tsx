import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as a11y from 'react-a11y';

import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const rootEl = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  rootEl
);

registerServiceWorker();

// Development add-ins
if (process.env.NODE_ENV !== 'production') {
  // Warns about potential accessibility issues with your React elements.
  a11y(React, { includeSrcNode: true, ReactDOM });

  // Hot module reloading
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NextApp = require('./components/App').default;

      ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
            <NextApp/>
          </BrowserRouter>
        </Provider>,
        rootEl
      );
    });
  }
}
