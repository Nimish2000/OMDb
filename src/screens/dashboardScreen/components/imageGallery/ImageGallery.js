import React from "react";
import "./ImageGallery.css";
import { useState } from "react";
import images from "../../../../config/constants";

function ImageGallery() {
  const [imageData, setImageData] = useState(images);
  const [currIndex, setCurrIndex] = useState(0);
  const handleIncrementImageChange = () => {
    const newImageData = imageData.map((item, index) => {
      if (index == currIndex) return { ...item, active: false };
      if (index === (currIndex + 1) % imageData.length)
        return { ...item, active: true };
      else return item;
    });
    setCurrIndex((prevVal) => (prevVal + 1) % imageData.length);
    setImageData(newImageData);
  };

  const handleDecrementImageChange = () => {
    const newImageData = imageData.map((item, index) => {
      if (index === currIndex) return { ...item, active: false };
      if (index === (currIndex - 1 + imageData.length) % imageData.length)
        return { ...item, active: true };
      else return item;
    });
    setImageData(newImageData);
    if (currIndex === 0) setCurrIndex(imageData.length - 1);
    else setCurrIndex((prevVal) => prevVal - 1);
  };

  return (
    <div className="image-row">
      <div className="carousal">
        {imageData.map((val, index) => {
          return (
            <>
              <img
                src={val.image}
                className={`image-carousal ${val.active ? "" : "invisible"}`}
              />
              <img
                className={`thumbnail ${val.active ? "" : "invisible"}`}
                src={val.thumbnail}
              />
            </>
          );
        })}
        <div className="left-arrow" onClick={handleDecrementImageChange}>
          <span className={"material-symbols-outlined" + " " + "arrow-left"}>
            arrow_back_ios
          </span>
        </div>
        <div className="right-arrow" onClick={handleIncrementImageChange}>
          <span className={"material-symbols-outlined" + " " + "arrow-right"}>
            arrow_forward_ios
          </span>
        </div>
      </div>
      <h3 className="movie-next-tag">Up Next</h3>
      <div className="movie-list"></div>
    </div>
  );
}

export default ImageGallery;
