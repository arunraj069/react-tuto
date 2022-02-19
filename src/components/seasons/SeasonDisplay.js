import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer : {
    text: "It's a sunny day",
    iconName : 'sun'
  },
  winter : {
    text: "It's a windy day",
    iconName : 'snowflake'
  }
}
const getSeason = (lat,month)=>{
  if(month > 2 && month < 9){
    return (lat > 0) ? 'winter' : 'summer';
  }else{
    return (lat > 0) ? 'summer' : 'winter';
  }
}

function SeasonDisplay(props) {
  const season = getSeason(props.obj.lat,new Date().getMonth());
  const {text, iconName} = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{ text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  )
}

export default SeasonDisplay;
