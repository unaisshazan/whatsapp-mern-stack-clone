import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';import { IconButton } from '@material-ui/core';
function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <div className="sidebar__headerRight">
<IconButton>
<DonutLargeIcon />
</IconButton>
    </div>
            </div>
        </div>
    )
}

export default Sidebar
