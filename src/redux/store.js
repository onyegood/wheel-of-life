import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas";

import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const devTools = process.env.NODE_ENV === "production"
  ? applyMiddleware(sagaMiddleware)
  : composeWithDevTools(applyMiddleware(sagaMiddleware, logger));

const store = createStore(reducer, devTools);

sagaMiddleware.run(saga);

export default store;
