import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import "semantic-ui-css/semantic.css";

const store = configureStore();

let rootEl = document.querySelector("#root");

let render = () => {
  const App = require("./app/layout/App").default; // Dynamically importing the app component

  return ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
};

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    // Whenever the app component or any one of it's dependencies changes, re-import the updated component and re-render it.
    module.hot.accept("./app/layout/App", () => {
      setTimeout(render);
    });
  }
}

render();
