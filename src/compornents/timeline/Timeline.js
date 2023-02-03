import React, { useEffect, useState } from 'react';
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';
import { db } from '../../firebase';
import { collection, getDocs, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore"; 

function Timeline() {
  const[posts,setPosts] = useState([]);

  useEffect(()=>{
    const postDate=collection(db,"posts");
    const q = query(postDate,orderBy("timestamp","desc"));
   
    onSnapshot(q,(querySnapshot)=>{
      setPosts(querySnapshot.docs.map((doc)=>doc.data()));
    })

  },[])

  return (
    <div className='timeline'>
        {/* header */}
        <div className='timeline--header'>
        {/* <h1>{console.log()}</h1> */}
            <h2>ホーム</h2>
        </div>
        {/* tweetbox */}
        <TweetBox/>
        {/* post */}
          {posts.map((posts)=>(
            <Post 
            key={posts.text}
            displayName={posts.displayName}
            username={posts.username}
            verified={posts.verified}
            text={posts.text}
            avater={posts.avater}
            image={posts.image}
            />
          ))}


    </div>
  )
}

export default Timeline