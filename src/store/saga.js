import { put, takeLatest, all } from "redux-saga/effects";
import { actionTypes } from "./actions";

const API_URL = "http://jsonplaceholder.typicode.com";

function* fetchNotes() {
  const json = yield fetch(`${API_URL}/posts`).then(response =>
    response.json()
  );

  yield put({ type: actionTypes.NOTES_RECEIVED, json });
}

function* createNote({ payload }) {
  const response = yield fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(response => response.json());

  yield put({ type: actionTypes.CREATED, response });
}

function* removeNote({ payload }) {
  yield fetch(`${API_URL}/posts/${payload}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());

  yield put({ type: actionTypes.REMOVED, id: payload });
}

function* getNote({ payload }) {
  const response = yield fetch(`${API_URL}/posts/${payload}`).then(response =>
    response.json()
  );

  yield put({ type: actionTypes.NOTE_RECEIVED, payload: response });
}

function* editNote({ payload }) {
  const response = yield fetch(`${API_URL}/posts/${payload.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(response => response.json());

  yield put({ type: actionTypes.EDITED, response });
}

function* getAllWatcher() {
  yield takeLatest(actionTypes.GET_NOTES, fetchNotes);
}

function* createWatcher() {
  yield takeLatest(actionTypes.CREATE, createNote);
}

function* deleteWatcher() {
  yield takeLatest(actionTypes.REMOVE, removeNote);
}

function* getWatcher() {
  yield takeLatest(actionTypes.GET_NOTE, getNote);
}

function* editWatcher() {
  yield takeLatest(actionTypes.EDIT, editNote);
}

export default function* rootSaga() {
  yield all([
    getAllWatcher(),
    createWatcher(),
    deleteWatcher(),
    getWatcher(),
    editWatcher()
  ]);
}
