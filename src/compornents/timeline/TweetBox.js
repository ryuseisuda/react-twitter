import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { db } from '../../firebase';
import "./TweetBox.css"

function TweetBox() {

  const [tweetMessage,setTweetMessage] = useState("");
  const [tweetImage,setTweetImage] = useState("");

  const sendTweet = (e) =>{
    e.preventDefault();
    addDoc(collection(db, "posts"), {
          displayName:"須田隆聖",
          username:"ryusei suda",
          verified:true,
          text:tweetMessage,
          avater:"https://source.unsplash.com/random",
          image:tweetImage,
          createAt:serverTimestamp(),
    });
    setTweetImage("");
    setTweetMessage("");
  };


  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox--input'>
               <Avatar/>
               <input placeholder='"今どうしてる？' type="text" onChange={(e)=> setTweetMessage(e.target.value)} value={tweetMessage}></input>
            </div>
            <input className='tweetBox--imageInput' placeholder='画像のurlを入力してください' type="text" 
            onChange={(e)=> setTweetImage(e.target.value)}
            value={tweetImage}
            />
            <Button className='tweetBox--tweetButton' type='submit'
            onClick={sendTweet} 
            >ツイートする</Button>
        </form>
    </div>
  )
}

export default TweetBox