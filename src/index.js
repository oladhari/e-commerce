import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import authReducer from "./store/reducers/auth";
import cartReducer from "./store/reducers/cart";
import registerServiceWorker from "./registerServiceWorker";
import thunk from "redux-thunk";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
