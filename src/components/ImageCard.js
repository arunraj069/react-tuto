import React from "react";

class ImageCard extends React.Component{
    constructor(props){
        super(props)
        this.imageRef = React.createRef();
        this.state = {spans : 0};
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan);
    }
    setSpan = ()=>{
        const height = this.imageRef.current.clientHeight;
        const spans  = Math.ceil(height/10);
        this.setState({spans});
    }
    render(){
        const {description,urls} = this.props.images;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} description={description}/>
            </div>
        )
    }
}
export default ImageCard;