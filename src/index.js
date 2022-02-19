import React from "react";
import ReactDom from "react-dom";
import Comment from "./components/comments/Comment";
import ApprovalCard from "./components/comments/ApprovalCard";
import SeasonDisplay from "./components/seasons/SeasonDisplay";
import Spinner from "./components/spinner/Spinner";

class App extends React.Component{
    state = {lat:null,errorMessage:''};
    componentDidMount = ()=>{
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            error => this.setState({errorMessage : "could not able to identify your location"}));
    }
    renderContent = ()=>{
        if(this.state.lat !== null){
            return <SeasonDisplay obj={this.state}/>
        }else{
            return <Spinner />
        }
    }
    render(){
      return (
        <div >
          {this.renderContent()}
        </div>  
      );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);