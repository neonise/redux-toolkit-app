import React from "react";

const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.id}</h3>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
    </article>
  );
};

export default PostExcerpt;
