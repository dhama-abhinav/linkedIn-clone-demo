import React from 'react'
import './InputOption.css'

export const InputOption = ({Icon , title,color}) => {
    return (
        <div className='inputOption'>
            {Icon && <Icon style={{color : color}} />}
            <h4>{title}</h4>
        </div>
    )
}
