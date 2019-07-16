import 'babel-regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
/*import { searchSuccess } from './actions/search'*/
import { createLogger } from "redux-logger/src";
import searchSaga from './sagas/search';
import createSagaMiddleware from 'redux-saga';

import App from './components/app';

const sagas = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(createLogger(), sagas)
);

sagas.run(searchSaga);

const results = [
    {
        full: 'https://media1.giphy.com/media/KjAuEjnuxc9YA/giphy.gif',
        thumbnail: 'https://media1.giphy.com/media/KjAuEjnuxc9YA/100_s.gif',
    },
    {
        full: 'https://media2.giphy.com/media/3o7btOtstWiXsWGEjS/giphy.gif',
        thumbnail: 'https://media2.giphy.com/media/3o7btOtstWiXsWGEjS/100_s.gif',
    },
];

/*window.setTimeout(() => {
    store.dispatch(searchSuccess(results));
}, 2000)*/

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('app')
);
