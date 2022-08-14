import React from "react";
import { apiStates, locationPosition } from "./locationPosition";

const PostList = () => {
  const { state, error, la, lo } = locationPosition();

  switch (state) {
    case apiStates.ERROR:
      return <span>ERROR: {error || "General error"}</span>;
    case apiStates.SUCCESS:
      return <span>{la}</span>;
    default:
      return <span>loading..</span>;
  }
};
export default PostList;
