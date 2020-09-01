import React, { useEffect, useState } from "react";
import Axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      const resp = await Axios.get(baseUrl);
      if (resp && resp.status === 200) {
        setPosts(resp.data);
      }
    }
    getAllPosts();
  }, []);

  const handleDelete = async (id) => {
    const prompt = window.confirm("Are you sure");
    if (prompt) {
      const resp = await Axios.delete(`${baseUrl}/${id}`);
      if (resp && resp.status === 200) {
        setPosts((prevPosts) => {
          return prevPosts.filter((post) => post.id !== id);
        });
      }
    }
  };

  return (
    <div>
      <div>
        <h1>Posts</h1>
        {posts.map((post) => (
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
        ))}
      </div>
    </div>
  );
}

export default App;
