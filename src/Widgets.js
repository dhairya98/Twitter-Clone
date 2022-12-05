import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed'
import { Search } from '@mui/icons-material'

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <Search className='widgets__searchIcon' />
            <input placeholder='Search Twitter' type='text'/>
        </div>
        <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={'858551177860055040'} />
            <TwitterTweetEmbed tweetId={'1589582799191035904'} />

            <TwitterTimelineEmbed sourceType='profile' 
            screenName='memechat_app'
            options={{height:400}} />

            <TwitterShareButton url={'https://www.instagram.com/___thedopediaries___/'} 
            options={{ text:'I am Awesome', via:'AnchalDhairya' }}/>
        </div>
    </div>
  )
}

export default Widgets