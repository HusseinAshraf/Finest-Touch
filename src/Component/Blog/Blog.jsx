import React from "react";

function Blog() {
  return (
    <>
      <div className="blog">
        <h1>Blog</h1>
        <p>Here are some of my blog posts</p>
        <div className="blog-posts">
          <div className="blog-post">
            <h2>Blog Post Title 1</h2>
            <p>Blog Post Description 1</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
