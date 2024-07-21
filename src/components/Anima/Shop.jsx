import React from "react";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="div-wrapper">
          <div className="text-wrapper">Jewellery</div>
        </div>
        <img className="mask-group" alt="Mask group" src="mask-group.png" />
        <div className="div">Decor Item’s</div>
        <img className="image-living-room" alt="Image living room" src="image-living-room.png" />
        <img className="img" alt="Mask group" src="image.png" />
        <div className="group-2">
          <div className="text-wrapper">Cloths</div>
        </div>
      </div>
    </div>
  );
};