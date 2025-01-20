// src / Carousel.test.js

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


test("works when you click on the right arrow", () => {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);

  // Check the first image is displayed
  expect(screen.getByAltText("testing image 1")).toBeInTheDocument();
  expect(screen.queryByAltText("testing image 2")).not.toBeInTheDocument();

  // Click the right arrow
  const rightArrow = screen.getByRole("button", { name: /right arrow/i });
  fireEvent.click(rightArrow);

  // Check the second image is displayed
  expect(screen.getByAltText("testing image 2")).toBeInTheDocument();
  expect(screen.queryByAltText("testing image 1")).not.toBeInTheDocument();
});
