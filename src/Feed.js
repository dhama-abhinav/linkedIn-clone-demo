import React, { useState, useEffect } from "react";
import "./Feed.css";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { InputOption } from "./InputOption";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Post } from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from 'react-flip-move'

export const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <PostAddIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={PhotoIcon} title="Photo" color="#724cf9" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#df2935   " />
          <InputOption Icon={EventNoteIcon} title="Event" color="#7f534b" />
          <InputOption
            Icon={AssignmentIcon}
            title="Write article"
            color="#abff4f"
          />
        </div>
      </div>
      <div className="feed__posts">
        <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
        </FlipMove>
        {/* <Post />
                <Post 
                name='abhiav'
                description= 'yoo'
                message = 'hiiiii'
                photoUrl = ''
                />
                <Post />
                <Post />
                <Post />
                <Post /> */}
      </div>
    </div>
  );
};
