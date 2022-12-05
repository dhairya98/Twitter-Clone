import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search } from '@mui/icons-material';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Twitter Icon */}
        <TwitterIcon className='sidebar__twitterIcon'/>
        {/* SidebarOption */}
        <SidebarOption Icon={Home} text='Home'/>
        <SidebarOption Icon={Search} text='Explore'/>
        <SidebarOption Icon={NotificationsNone} text='Notifications'/>
        <SidebarOption Icon={MailOutline} text='Messages'/>
        <SidebarOption Icon={BookmarkBorder} text='Bookmarks'/>
        <SidebarOption Icon={ListAlt} text='Lists'/>
        <SidebarOption Icon={PermIdentity} text='Profile'/> 
        <SidebarOption Icon={MoreHoriz} text='More'/>
        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar