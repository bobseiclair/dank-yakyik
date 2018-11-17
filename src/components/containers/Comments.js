import React, { Component } from 'react'

import Comment from "../presentation/Comment"
import styles from "./styles"

class Comments extends Component {
    constructor(){
        super();
        this.state = {
            list: [],
            
          comment: {
            username: "",
            body: "",
            timestamp: ""
          }
        }
    }

    submitComment(){
        // console.log("submit Comment"+JSON.stringify(this.state.comment))
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.comment)

        this.setState({
          list: updatedList
        })
    }

    updateUsername(e){
      // console.log("updateUsername: "+e.target.value)
      let updatedComment = Object.assign({}, this.state.comment)
      updatedComment['username'] = e.target.value

      this.setState({
        comment: updatedComment
      })
    }

    updateBody(e){
      // console.log("updateBody: "+e.target.value)
      let updatedComment = Object.assign({}, this.state.comment)
      updatedComment['body'] = e.target.value

      this.setState({
        comment: updatedComment
      })
    }
    updateTimeStamp(e){
      // console.log("update Time Stamp: "+e.target.value)
      let updatedComment = Object.assign({}, this.state.comment)
      updatedComment['timestamp'] = e.target.value

      this.setState({
        comment: updatedComment
      })
    }

  render() {
      const listComment = this.state.list.map((com, i) => {
        return (
            <li key={i}>
                <Comment comment={com} />
            </li>
        )
      })

      const commentStyle = styles.comment
      const commentsStyle = styles.commentsList
    return (
      <div>
        <h3>Zone G: Comments List</h3>
        <div style={commentStyle.commentsBox}>
            <ul style={commentsStyle}>
                { listComment }
            </ul>
            <input
                onChange={this.updateUsername.bind(this)}
                className="form-control"
                type="text"
                placeholder="Utilisateur"
            />
            <br />
            <input
                onChange={this.updateBody.bind(this)}
                className="form-control"
                type="text"
                placeholder="Commentaire"
            />
            <br />
            <input
                onChange={this.updateTimeStamp.bind(this)}
                className="form-control"
                type="text"
                placeholder="A quel instant ?"
            />
            <br />
            <button
              onClick={this.submitComment.bind(this)}
              className="btn btn-info" >
                Envoi Commentaire
            </button>
        </div>
    </div>
    )
  }
}

export default Comments
