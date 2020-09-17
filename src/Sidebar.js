import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';import { IconButton } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <div className="sidebar__headerRight">
<IconButton>
<DonutLargeIcon />
</IconButton>
<IconButton>
    <ChatIcon/>
</IconButton>
<IconButton>
    <MoreVert/>
</IconButton>
    </div>
            </div>
        </div>
    )
}

export default Sidebar
