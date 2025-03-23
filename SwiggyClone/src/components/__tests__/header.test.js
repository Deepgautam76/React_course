import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../redux_store/appStore";
import Header from "../header/Header";
import "@testing-library/jest-dom";

describe("All test cases for Header component", () => {
  test("should render header login/logout button", () => {
    render(
      <MemoryRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </MemoryRouter>
    );

    const loginbutton = screen.getByRole("button"); 
    // Ensure correct role
    expect(loginbutton).toBeInTheDocument();
  });
});

