import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

export default function configureStore(preloadedState) {
  const middlewares = [thunk];
  const enhancedMiddleware = applyMiddleware(...middlewares);
  const storeEnhancers = [enhancedMiddleware];
  const enhancedCompose = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, enhancedCompose);

  return store;
}
