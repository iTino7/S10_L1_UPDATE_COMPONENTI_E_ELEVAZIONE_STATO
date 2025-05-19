function CommentsList(props) {
  return (
    <>
      {props.comments.map((comment) => (
        <p>{comment.comment}</p>
      ))}
    </>
  );
}

export default CommentsList;
