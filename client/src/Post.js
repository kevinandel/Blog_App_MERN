import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Without a doubt</h2>
        <p className="info">
          <a className="author">Kevin Andel Josy</a>
          <time>13-10-2024 09:02</time>
        </p>
        <p className="summary">
          The Rule comes from interior design; it works very well for UI design
          as it creates balance and helps the user to navigate with ease.
        </p>
      </div>
    </div>
  );
}

export default Post;
