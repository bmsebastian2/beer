import React from "react";
import { apiStates, locationPosition } from "./locationPosition";

const PostList = () => {
  const { state, error, district } = locationPosition();

  switch (state) {
    case apiStates.ERROR:
      return error;
    case apiStates.SUCCESS:
      return district;
    default:
      return state;
  }
};
export default PostList;
