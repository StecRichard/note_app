import { actionTypes } from "./actions";

export default (state = { notes: [], count: 0 }, action) => {
  switch (action.type) {
    case actionTypes.CREATE:
      return { ...state };
    case actionTypes.CREATED:
      return {
        ...state,
        notes: [...state.notes, action.response],
        count: state.count + 1
      };
    case actionTypes.REMOVE:
      return { ...state };
    case actionTypes.REMOVED:
      return {
        ...state,
        notes: state.notes.filter(x => action.id !== x.id),
        count: state.count - 1
      };
    case actionTypes.GET_NOTES:
      return { ...state };
    case actionTypes.NOTES_RECEIVED:
      const notes = action.json.slice(0, 20);
      return { ...state, notes, count: notes.length };
    default:
      return state;
  }
};
