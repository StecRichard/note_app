import { combineReducers } from "redux";
import noteDetailReducer from "./note-detail-reducer";
import notesReducer from "./note-list-reducer";
import { connectRouter } from "connected-react-router";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    notesReducer,
    noteDetailReducer
  });

export default createRootReducer;
