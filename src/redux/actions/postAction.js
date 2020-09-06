export const getPosts = () => ({
  type: "GET_ITEMS_REQUEST",
});

export const deletePost = (id) => ({
  type: "DELETE_ITEM_REQUEST",
  id,
});

export const getPostsSuccess = (data) => ({
  type: "GET_ITEMS_SUCCESS",
  payload: data
});

export const deletePostSuccess = (id) => ({
  type: "DELETE_ITEM_SUCCESS",
  payload: id,
});

export const loading = () => {
  return {
    type: "LOADING_ITEM",
  };
};
