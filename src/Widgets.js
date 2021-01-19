import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export const Widgets = () => {
    const newsArticle = (heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("using firebase in backend","top news - 9999 readers")}
            {newsArticle('Coronavirus : UK Updates','Top news -910 readers')}
            {newsArticle("Take Elon Musks innovation quiz","3da-ago - 30026 readers")}
            {newsArticle("Avoiding common resume mistakes", "3d ago - 103369 readers")}
            {newsArticle("Here's who's hiring in the UK", "6h ago - 6657 readers")}
        </div>
    )
}
