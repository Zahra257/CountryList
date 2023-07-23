import React from 'react'

 const Post  = ({color,text}) => {

  return (
    <div style={{backgroundColor:`${color}`}}>
      <h3>Post:{text}</h3>
    </div>
  )
}
export default Post
