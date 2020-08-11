import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
// import Image from "./image.jpg";s
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      {/* head */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweet box */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}
export default Feed;
