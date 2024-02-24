// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteComments, onToggleIsLiked} = props
  const {id, name, comment, isLike, initialClassName} = commentDetails
  const postedTime = formatDistanceToNow(new Date())

  const likeTextClassName = isLike ? 'button active' : 'button'

  const likeImageUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onDeleteComment = () => {
    onDeleteComments(id)
  }

  const onClickLike = () => {
    onToggleIsLiked(id)
  }

  return (
    <li className="comment-item">
      <div className="user-container">
        <div className={initialClassName}>
          <p className="initial">{name[0].toUpperCase()}</p>
        </div>
        <p className="username">{name}</p>
        <p className="time">{postedTime} ago</p>
      </div>
      <div>
        <p className="comment">{comment}</p>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>

        <div>
          <button
            className="button"
            type="button"
            onClick={onDeleteComment}
            data-testid="delete"
          >
            <img
              className="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
