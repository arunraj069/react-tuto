import React from 'react'

function ImageList(props) {
  const images = props.images.map(({description, id, urls})=>{
    return <img key={id} description={description} src={urls.regular}/>
  });
  return <div>{images}</div>
}

export default ImageList
