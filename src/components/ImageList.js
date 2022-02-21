import React from 'react';
import "./css/ImageList.css";
import ImageCard from './ImageCard';

function ImageList(props) {
  const images = props.images.map((image)=>{
    return <ImageCard key={image.id} images={image}/>
  });
  return <div className='image-list'>{images}</div>
}

export default ImageList
