import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmitPost = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title
    }).then(() => {
      setTitle('');
      console.log('Inside Then Promise');
    });
    console.log('Outside Then Promise');
  }

  return (<div>
    <form onSubmit={onSubmitPost}>
      <div className="form-group">
        <label>Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  );
};

export default PostCreate;