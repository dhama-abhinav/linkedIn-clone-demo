import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { HeaderOption } from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';

export const Header = () => {
     const dispatch = useDispatch()
     
     
     const logoutOfApp = ()=>{
         dispatch(logout())
         auth.signOut()
     }
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                  <SearchIcon />
                  <input placeholder='Search' type="text"/>  
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={PeopleAltIcon} title='My network' />
                <HeaderOption Icon={WorkIcon} title='Jobs' />
                <HeaderOption Icon={MessageIcon} title='Messages' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar={true} onClick={logoutOfApp}  title='me' />
            </div>
        </div>
    )
}
