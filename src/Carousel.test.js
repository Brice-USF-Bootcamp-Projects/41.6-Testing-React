import { render, fireEvent, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    screen.getByAltText("testing image 1")
  ).toBeInTheDocument();
  expect(
    screen.queryByAltText("testing image 2")
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = screen.getByRole('button', { name: /right arrow/i });
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    screen.queryByAltText("testing image 1")
  ).not.toBeInTheDocument();
  expect(
    screen.getByAltText("testing image 2")
  ).toBeInTheDocument();
});
