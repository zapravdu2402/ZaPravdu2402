import React from "react";
import Masonry from "react-masonry-css";
import "./posts.css";
import posts from "./data/posts.js";
import Post from "./Post";

const breakpointColumnsObj = {
  default: 4,
  1500: 3,
  1000: 2,
  500: 1,
};

const Posts = (props) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {posts.map((url) => (
        <Post url={url} key={url} />
      ))}
    </Masonry>
  );
};

Posts.propTypes = {};

export default Posts;
