import React, { useState, useEffect } from "react";
import { PostList } from "./PostList";

export const App = () => {
  const [data, setData] = useState([], ({ data }) => {
    setPosts(data.slice());
  });
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
        response
          .json()
          .then(data => ({ data: data }))
          .then(res => {
            setData(res.data);
          })
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    setPosts(data.slice());
  }, [data]);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};
