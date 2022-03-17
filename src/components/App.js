import React,{useState,useEffect} from "react";
import axios from "./api/axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

function App() {
  const [videos,setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] = useState(null);
  useEffect(()=>{
    onTermSubmit('react js');
  },[]);
  const onTermSubmit= async (term)=>{
    const response = await axios.get('/search',{
        params: {
            q : term
        },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
}

return (
    <div className="ui container" style={{marginTop : '10px'}}>
        <SearchBar onTermSubmit={onTermSubmit}/>
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