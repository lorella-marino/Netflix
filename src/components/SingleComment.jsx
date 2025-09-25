const SingleComment = ({ comment, onDelete }) => (
  <li className="mb-3 ">
    <div className="d-flex align-items-center justify-content-between">
      <div>
        <p className="mb-0">{comment.comment}</p>
        <p className="mb-0" style={{ fontSize: "0.8rem" }}>
          Voto: {comment.rate}
        </p>
      </div>
      <div>
        <button className="bg-secondary border-0 rounded-2 me-3" onClick={() => onDelete(comment._id)}>
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash3-fill text-white mb-1 "
            viewBox="0 0 16 16"
          >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
          </svg>
        </button>
      </div>
    </div>
  </li>
);

export default SingleComment;
