import { Avatar, Button } from '@mui/material'
import React,{useState} from 'react'
import './TweetBox.css'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
    const sendTweet=(e)=>{
        e.preventDefault(e.target.value)
        db.collection('posts').add({
            displayName:'Dhairya', 
            username:'badmashdhairya', 
            verified:false, 
            text:tweetMessage, 
            image:tweetImage, 
            avatar:'https://s3images.zee5.com/wp-content/uploads/2021/09/fastest-cars-world-2021-luxe-digital@2x.jpeg'
        
        })
        setTweetMessage("")
        setTweetImage("")
    }
  return (
    <div className='tweetbox'>
        <form action='submit' >
            <div className='tweetBox__input'>
                <Avatar src='https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg'/>
                <input value={tweetMessage} placeholder="What's happening?" onChange={(e)=>setTweetMessage(e.target.value)} type='text' />
                {/* <input placeholder="Enter Image URL" type='text' /> */}
            </div>
            <input value={tweetImage} className='tweetBox__imageInput' onChange={(e)=>setTweetImage(e.target.value)} placeholder="Enter Image URL" type='text' /> 
            <Button type='submit' onClick={sendTweet} className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox