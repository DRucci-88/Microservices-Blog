import React from "react";

const CommentList = ({comments}) => {
  
  const renderedComments = comments.map(comment => {
    let content = '';
    // if(comment.status === 'approved')
    //   content = comment.content;
    // else if (comment.status === 'pending')
    //   content = 'This comment is awaiting moderation';
    // else if (comment.status === 'rejected')
    //   content = 'This comment has been rejected';
    switch (comment.status) {
      case 'approved': content = comment.content; break;
      case 'pending': content = 'This comment is awaiting moderation'; break;
      case 'rejected': content = 'This comment has been rejected'; break;
    }
    return (
      <li key={comment.id}>{content}</li>
    );
  });

  return (
    <ul>
      {renderedComments}
    </ul>
  );
};

export default CommentList;