import { actionTypes } from "./actions";

export default (state = { note: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_NOTE:
      return { ...state };
    case actionTypes.NOTE_RECEIVED:
      return { ...state, note: action.payload };
    case actionTypes.EDIT:
      return { ...state };
    case actionTypes.EDITED:
      return { ...state, note: action.payload };
    default:
      return state;
  }
};