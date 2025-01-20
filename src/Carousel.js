// src / Carousel.js

import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  if (!photos.length) {
    return (
      <div className="Carousel">
        <h1>{title}</h1>
        <p>No images to display.</p>
      </div>
    );
  }

  const currCard = photos[currCardIdx];
  const total = photos.length;

  function goForward() {
    setCurrCardIdx((idx) => (idx + 1) % total);
  }

  function goBackward() {
    setCurrCardIdx((idx) => (idx - 1 + total) % total);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
      <i
          className="bi bi-arrow-left-circle"
          role="button"
          aria-label="left arrow"
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="bi bi-arrow-right-circle"
          role="button"
          aria-label="right arrow"
          onClick={goForward}
        />
      </div>
    </div>
  );
}

Carousel.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

Carousel.defaultProps = {
  photos: [],
  title: "Image Carousel",
};

export default Carousel;

