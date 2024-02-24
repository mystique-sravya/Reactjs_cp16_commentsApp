import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onDeleteComments = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(each => each.id !== id),
    })
  }

  onToggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state
    return (
      <div className="comments-app-container">
        <div className="comments-container">
          <form className="left-container" onSubmit={this.onAddComment}>
            <h1 className="heading">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <input
              className="name-input"
              onChange={this.onChangeName}
              type="text"
              placeholder="Your Name"
              value={name}
            />
            <br />
            <textarea
              className="comment-input"
              onChange={this.onChangeComment}
              rows="5"
              placeholder="Your Comment"
              value={comment}
            />

            <br />
            <button type="submit" className="submit-button">
              Add Comment
            </button>
          </form>
          <div className="right-container">
            <img
              className="comments-image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="comment-line" />
        <div className="comment-Items-main-container">
          <p>
            <span className="count-comment">{commentsList.length}</span>{' '}
            Comments
          </p>
          <ul className="comments-items-container">
            {commentsList.map(each => (
              <CommentItem
                key={each.id}
                onDeleteComments={this.onDeleteComments}
                onToggleIsLiked={this.onToggleIsLiked}
                commentDetails={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
