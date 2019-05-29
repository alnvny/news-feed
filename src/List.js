import React from 'react';

const List = ({imgSrc,abstract,author,date,url}) => {
    return(   
    <div className="article">
        <img src={imgSrc} className="articleImage"></img>
        <div className="test" ><a target='_blank' className="link" href={url}>{abstract}</a></div>
        <div className="author">{author} <span className="date">{date}</span></div>
    </div>
    )
}

export default List;