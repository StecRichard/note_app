export const getNotes = () => ({
  type: actionTypes.GET_NOTES
});

export const getNote = payload => ({
  type: actionTypes.GET_NOTE,
  payload
});

export const create = payload => ({
  type: actionTypes.CREATE,
  payload
});

export const remove = payload => ({
  type: actionTypes.REMOVE,
  payload
});

export const edit = payload => ({
  type: actionTypes.EDIT,
  payload
});

export const actionTypes = {
  GET_NOTE: "GET_NOTE",
  NOTE_RECEIVED: "NOTE_RECEIVED",
  EDIT: "EDIT",
  EDITED: "EDITED",
  CREATE: "CREATE",
  CREATED: "CREATED",
  REMOVE: "REMOVE",
  REMOVED: "REMOVED",
  GET_NOTES: "GET_NOTES",
  NOTES_RECEIVED: "NOTES_RECEIVED"
};
