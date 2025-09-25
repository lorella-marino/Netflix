import SingleComment from "./SingleComment";

const CommentsList = ({ comments, onDelete }) => (
  <ul>
    {comments.map((comment) => (
      <SingleComment key={comment._id} comment={comment} onDelete={onDelete} />
    ))}
  </ul>
);

export default CommentsList;
