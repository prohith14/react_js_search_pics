import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'


const ImageList = (props) => {
  const imageTags = props.images.map((image) => <ImageCard key={image.id} image={image} />);
  return (
            <div className="image-list"> {imageTags} </div>
        )
    
};

export default ImageList;