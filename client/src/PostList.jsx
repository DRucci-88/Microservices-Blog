import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {

  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts');
    console.log(res);
    setPosts(res.data);
  }

  useEffect(() => {
    fetchPosts().then(_ => '');
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div key={post.id} className="card" style={{ width: '50%', marginBottom: '20px' }}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
          <CommentList comments={post.comments} />
        </div>
      </div>
    )
  });

  console.log(posts);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-around">
      {renderedPosts}
    </div>
  );
};

export default PostList;