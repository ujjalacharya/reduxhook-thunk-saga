import axios from "axios";
import { put, all, takeLatest } from "redux-saga/effects";

import * as postAction from "../actions/postAction";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function* getPosts() {
  try {
    yield put(postAction.loading());

    const res = yield axios.get(baseUrl);

    yield put(postAction.getPostsSuccess(res.data));
  } catch (e) {
    yield put({ type: "GET_ITEMS_ERROR", payload: e.message });
  }
}

function* deletePost({ id }) {
  try {
    yield put(postAction.loading());

    const res = yield axios.delete(`${baseUrl}/${id}`);

    yield put(postAction.deletePostSuccess(id));
  } catch (e) {
    yield put({ type: "DELETE_ITEM_ERROR", payload: e.message });
  }
}

export default function* () {
  yield all([
    takeLatest("GET_ITEMS_REQUEST", getPosts),
    takeLatest("DELETE_ITEM_REQUEST", deletePost),
  ]);
}
