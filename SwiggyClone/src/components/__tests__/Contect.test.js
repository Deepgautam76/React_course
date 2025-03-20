import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contect from "../header/Contect";

/**
 * Using describe to group the test cases
 * describe is a function that takes two arguments
 * 1. Name of the test group  (String)
 * 2. Callback function  (Function) that contains the test cases
 */

describe("Contect Component", () => {

  test("should load heading", () => {
    render(<Contect />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  // You can also write testcases unsing it() function
  it("should load heading", () => {
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
});
