import React from "react";
import ReactDom from "react-dom";
import Comment from "./components/comments/Comment";
import ApprovalCard from "./components/comments/ApprovalCard";
const App = ()=>{
    const obj = {
        name : "arun",
        comment : "Hi hello there"
    };
    return (
        <div>
            <ApprovalCard>
                <Comment {...obj}/>
            </ApprovalCard>
            <ApprovalCard>
                <Comment {...obj}/>
            </ApprovalCard>
        </div>
    )
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);