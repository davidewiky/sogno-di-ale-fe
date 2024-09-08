import React from "react";

interface ImageContainerProps {
  width: string,
  height: string,
  image: string,
}

export function ImageContainer({width, height, image}: Readonly<ImageContainerProps>) {
  return (<div style={{ marginBottom: '10px', width: width, height: height, overflow: 'hidden' }}>
    <img src={`data:image/jpg;base64,${image}`} alt="file" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}/>
  </div>);

}
