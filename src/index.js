import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import "./styles/tailwind.css";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import * as serviceWorker from "./serviceWorker";

import { AndromedaDesignSystemProvider } from "@andromedaprotocol/react";

const store = createStore(
  reducer,
  composeWithDevTools({
    trace: true,
  })(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <AndromedaDesignSystemProvider>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </AndromedaDesignSystemProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
