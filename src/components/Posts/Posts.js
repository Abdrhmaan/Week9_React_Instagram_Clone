

import React from 'react'
 import Post from './Post';

const Posts = (props) => {

  const { posts } = props;
  return (
    <div>
     
     {
   
   posts.map((item) => (
    <Post  Post ={item}/>

   ))
     }
      
      
      </div>
  )
}

export default Posts