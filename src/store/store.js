import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware
      )
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

