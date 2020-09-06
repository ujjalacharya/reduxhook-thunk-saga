import { all, takeLatest } from "redux-saga/effects";

import {getPosts, deletePost} from "./postSaga"

export default function* () {
  yield all([
    takeLatest("GET_ITEMS_REQUEST", getPosts),
    takeLatest("DELETE_ITEM_REQUEST", deletePost),
  ]);
}
