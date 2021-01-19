import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOption.css'

export const HeaderOption = ({avatar ,title,Icon , onClick}) => {
    const user = useSelector(selectUser)

    return (
        <div onClick={onClick} className='headerOption'>
            {/* only when i pass the icon , i want to show the Icon component itself  */}
            {Icon && <Icon className='headerOption__icon' />}
            {
                avatar && (
                    <Avatar className='headerOption__icon' src={user?.photoUrl} >
                        {user?.email[0]}
                    </Avatar>
                )
            }
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    )
}
