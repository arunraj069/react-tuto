import React from "react";
import ReactDom from "react-dom";
import Comment from "./components/comments/Comment";
import ApprovalCard from "./components/comments/ApprovalCard";
import SeasonDisplay from "./components/seasons/SeasonDisplay";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { lat: null, errorMessage : ''}
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            error => this.setState({errorMessage : "could not able to identify your location"}));
    }
    render(){
        return (
            <div>
                <SeasonDisplay obj={this.state}/>
            </div>
        ) 
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);