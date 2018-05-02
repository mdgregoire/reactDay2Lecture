import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
//createStore is a function
import { createStore, applyMiddleware } from 'redux';
//Provider is a Component
import { Provider } from 'react-redux';
//logger helps track the react side of react-redux
import logger from 'redux-logger';
import reducers from './redux/reducers/app.reducer';


const storeInstance = createStore(
  //in es6 you can have objects that have the same name for the key:value pairs be just the key name
reducers,
applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
