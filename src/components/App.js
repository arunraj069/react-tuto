import React,{useState,useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

function App() {
  
  const [selectedVideo,setSelectedVideo] = useState(null);
  const [videos,search] = useVideos('react js');
  useEffect(()=>{
    setSelectedVideo(videos[0]);
  },[videos])
  


return (
    <div className="ui container" style={{marginTop : '10px'}}>
        <SearchBar onTermSubmit={search}/>
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={selectedVideo}/>
                </div>
                <div className="five wide column">
                    <VideoList 
                        onSelectVideo={setSelectedVideo} 
                        videos={videos}
                    />
                </div>
            </div>
        </div>
    </div>
)
}

export default App;