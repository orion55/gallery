import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import App from './app/App';
import store from './store/store';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import * as routes from './constants/routes';
import Gallery from './containers/Gallery';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={routes.MAIN} component={App} />
          <Route exact path={routes.GALLERY} component={Gallery} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your store to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
