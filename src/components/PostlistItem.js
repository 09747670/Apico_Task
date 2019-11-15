import React from "react";
import T from "prop-types";

export const PostListItem = ({ id, title, body }) => {
  return (
    <div className="postItem" id={id}>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">TITLE</th>
            <th scope="col">BODY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{body}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

PostListItem.propTypes = {
  id: T.number.isRequired,
  title: T.string.isRequired,
  body: T.string.isRequired
};

export default PostListItem;
