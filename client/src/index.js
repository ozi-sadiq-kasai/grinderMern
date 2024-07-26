import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'


import App from './components/App';
import reducers from './reducers'

const store = createStore(reducers,{},applyMiddleware(thunk))

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
<Provider store={store}>
<App />
</Provider>
);


   // console.log('stipe key',process.env.REACT_APP_STRIPE_KEY)
   // console.log('Environment is',process.env.NODE_ENV)