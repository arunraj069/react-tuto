import './VideoItem.css';
import React from 'react';

const VideoItem = ({video,onSelectVideo})=> {
  return (
    <div className="video-item item" onClick={()=>onSelectVideo(video)}>
    <img className="ui image" src={video.snippet.thumbnails.medium.url} />
    <div className="content">
      <a className="header">{video.snippet.title}</a>
      <div className="description">Updated 10 mins ago</div>
    </div>
  </div>
  )
}

export default VideoItem
