import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {

  // 🔥 Make sure the parent of Comments is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.
  const { comments
  } = props;

  console.log(comments)
  return (
    <div>
    
    {comments.map((item) =>  (
      <Comment commnet ={item} />
    ))}
    
    </div>
  );
};

export default Comments;
