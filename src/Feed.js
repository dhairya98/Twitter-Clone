import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts,setPosts]= useState([])
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>(
                setPosts(snapshot.docs.map(doc=> doc.data()
                    // Loop through every post
                    )
                )
            )
        )
    },[])
return (
    
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
            {/* Header */}
            
        </div>
        {/* Tweet Box */}
        <TweetBox />
        <FlipMove >
        {posts.map((post)=>(
            <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
        ))}
        </FlipMove>
        
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
        
    </div>
)
}

export default Feed