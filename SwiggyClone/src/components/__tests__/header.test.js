import { render, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

import Header from "../header/Header";

describe("All testcase for header component", () => {
  test("should we header login logout button", () => {
    render(<Header />);
    const button = screen.getByRole("button");
    //Assert
    expect(button).toBeInTheDocument();
  });
});
