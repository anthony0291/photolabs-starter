import React from 'react';



const ImageList = (props) => {

  return (
    <h1>Selected Images</h1>
  );
};



const itemData = [
  {
    img: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
    title: 'Breakfast',
    rows: 2,
    cols: 6,
  },
  {
    img: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
    title: 'Burger',
    rows: 1.75,
    cols: 2,
  },
  {
    img: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
    title: 'Camera',
    rows: 1.75,
    cols: 2,
  },
  {
    img: `${process.env.PUBLIC_URL}/Image-6-Full.jpg`,
    title: 'Coffee',
    rows: 1.75,
    cols: 2,
  },
];

export default ImageList;