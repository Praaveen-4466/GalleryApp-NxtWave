import React from "react";

import "./index.css";

const ThumbnailItem = (props) => {
  const { imageDetails, isActive, setActiveThumbnailId } = props;
  const { imageUrl, imageAltText, id } = imageDetails;

  const itemStyling = `gallery-thumbnail-item${
    isActive ? "selected-gallery-thumbnail" : ""
  }`;

  const onClickItem = () => {
    setActiveThumbnailId(id);
  };

  return (
    <li className="thumbnail-list-item">
      <button className="button" type="button" onClick={onClickItem}>
        <img src={imageUrl} alt={imageAltText} className={itemStyling} />
      </button>
    </li>
  );
};

export default ThumbnailItem;
