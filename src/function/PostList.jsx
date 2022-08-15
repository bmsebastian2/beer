import React from "react";
import { apiStates, locationPosition } from "./locationPosition";

const PostList = () => {
  const { state, error, district } = locationPosition();

  switch (state) {
    case apiStates.ERROR:
      return <span >{error}</span >;
    case apiStates.SUCCESS:
      return <span>{district}</span>;
    default:
      return <span>loading..</span>;
  }
};
export default PostList;
