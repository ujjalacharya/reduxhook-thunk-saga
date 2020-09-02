import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => (dispatch) => {
  dispatch(loading());
  axios.get(baseUrl).then((res) =>
    dispatch({
      type: "GET_ITEMS",
      payload: res.data,
    })
  );
};

export const deletePost = (id) => (dispatch) => {
  dispatch(loading());
  axios.delete(`${baseUrl}/${id}`).then((res) =>
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    })
  );
};

// export const addItem = item => dispatch =>{
//     axios
//         .post('/api/items', item)
//         .then(res => dispatch({
//             type: ADD_ITEM,
//             payload: res.data
//         }))
// }

export const loading = (item) => {
  return {
    type: "LOADING_ITEM",
  };
};
