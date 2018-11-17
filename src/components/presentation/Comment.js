import React from 'react'

const Comment = (props) => {
  
    return (
    
      <div style={{marginBottom: '12px', marginTop: "12px"}}>
       <span style={{marginBottom: 0, fontSize: 20, fontWeight: 400}}>
            {props.comment.body}
         </span><br />
        <span style={{fontWeight: 200}} >{props.comment.username}</span>
        <span style={{marginRight: 12, marginLeft: 12, fontWeight: 200}}>|</span>
        <span style={{fontWeight: 200}} >{props.comment.timestamp}</span>
        <hr />
      </div>
    
    )
  }

export default Comment
