import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

export const Sidebar = () => {
    const user = useSelector(selectUser)

    const recentItem = (topic)=> (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhZGllbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt=""/>
                <Avatar src={user.photoUrl} className='sidebar__avatar' >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        12
                    </p>
                </div>
                <div className="sidebar__stat">
                <p>Views of your post</p>
                    <p className="sidebar__statNumber">
                        100
                    </p>
                </div>
            </div>
           <div className="sidebar__bottom">
               <p>Recent</p>
               {recentItem('reactjs')}
               {recentItem('redux')}
               {recentItem('programming')}
               {recentItem('aws')}
               {recentItem('css')}
               {recentItem('nodejs')}
               </div> 
        </div>
    )
}
