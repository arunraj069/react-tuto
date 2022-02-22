import React from 'react';
import VideoItem from './VideoItem';

function VideoList({videos, onSelectVideo}) {
 const renderedList = videos.map((video, i)=>{
    return <VideoItem key={i} video={video} onSelectVideo={onSelectVideo}/>
 });
  return (
    <div className='ui relaxed divided list'>
      {renderedList}
    </div>
  )
}

export default VideoList
