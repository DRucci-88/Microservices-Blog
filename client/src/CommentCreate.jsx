import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {

  const [content, setContent] = useState('')
  const onSubmitComment = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    }).then(() => setContent(''));

  }
  return (<div>
    <form onSubmit={onSubmitComment}>
      <div className="form-group">
        <label>New Comment</label>
        <input value={content} onChange={e => setContent(e.target.value)} className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>);
};

export default CommentCreate;