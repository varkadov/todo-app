import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/app/app'
import reducer from './reducers';
import { loadStore, saveStore } from './utils/local-storage';

const initStore = loadStore();

const store = createStore(
    reducer,
    initStore,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => {
    saveStore(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
