// You do not need to change this file.
import React from 'react';

const Comment = props => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.
  const { commnet } = props;

  return (
    <div className='comment-text'>
      <span className='user'>{commnet.username}</span>
      {' '}
      <span className='comment'>{commnet.text}</span>
    </div>
  );
};


export default Comment;
