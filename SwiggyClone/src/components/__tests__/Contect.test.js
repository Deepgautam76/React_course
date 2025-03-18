import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contect from "../header/Contect";

test("should load heading", () => {
  render(<Contect />);
  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("should load paragraph", () => {
  render(<Contect />);

  //Querying
  const paragraph = screen.getAllByRole("paragraph");

  //Assertion
  expect(paragraph[0]).toBeInTheDocument();
});
