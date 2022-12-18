import React, { useEffect } from "react";
import { connect } from "react-redux";
//import { fetchUser } from "../actions";

// const UserHeader = (props)=>{
//     useEffect(() => {
//         props.fetchUser(props.userId);
//     },[props.userId]);
//     const user = props.users.find(user=> user.id === props.userId);
//     if(!user){
//         return null;
//     }
//     return <div className="header"> { user.name }</div>
// }

class UserHeader extends React.Component{
    // componentDidMount(){
    //     this.props.fetchUser(this.props.userId);
    // }
    render(){
        const { user } = this.props;
        if(!user){
            return null;
        }
        return <div className="header"> { user.name }</div>
    }
};
const mapStateToProps = (state, ownProps) =>{
    return { user : state.users.find(user=> user.id === ownProps.userId)}
}
export default connect(mapStateToProps)(UserHeader);