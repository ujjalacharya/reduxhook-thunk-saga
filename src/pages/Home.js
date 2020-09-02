import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPosts, deletePost } from "../redux/actions/postAction";

function Home() {
  const { posts, loading } = useSelector(({ post }) => post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = async (id) => {
    const prompt = window.confirm("Are you sure");
    if (prompt) {
      dispatch(deletePost(id));
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 0.1 }}>
              <p>{post.id}</p>
            </div>
            <div style={{ flex: 0.7 }}>
              <p>{post.title}</p>
            </div>
            <div style={{ flex: 0.2 }}>
              <p>
                <b>Edit</b>
              </p>
              <p style={{ color: "red" }} onClick={() => handleDelete(post.id)}>
                <b>Delete</b>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
