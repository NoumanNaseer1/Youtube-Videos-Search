import React from 'react';
import VideoItem from './VideoItem'
 const VideosList= ({videos, onVideoSelect})=>{   
 
   const renderelist= videos.map((video)=>{
    return <VideoItem key={video.id.Id} onVideoSelect={onVideoSelect} video={video}></VideoItem>;
     });
    return <div className="ui relaxed divided list"  style={{fontSize: '10px',fontFamily: 'Roboto'}}>
      {renderelist}
    </div>
}
export default VideosList;  