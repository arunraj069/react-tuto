import React from "react";
import axios from "./api/axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component{
    state = {videos : [], selectedVideo : null}
    componentDidMount(){
        this.onTermSubmit('react js');
    }
    onTermSubmit= async (term)=>{
        const response = await axios.get('/search',{
            params: {
                q : term
            },
        });
        this.setState({
            videos : response.data.items,
            selectedVideo :response.data.items[0]
        })
    }
    onVideoSelect=(video)=>{
        this.setState({selectedVideo : video});
    }
    render(){
        return (
            <div className="ui container" style={{marginTop : '10px'}}>
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onSelectVideo={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;