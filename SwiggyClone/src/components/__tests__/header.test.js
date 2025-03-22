import React from "react";
import { render, screen } from "@testing-library/dom";
import { BrowserRouter, NavLink } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../redux_store/appStore";
import Header from "../header/Header";

import "@testing-library/jest-dom";

describe("All testcase for header component", () => {
  test("should we header login logout button", () => {
    render(
      <BrowserRouter>
        <NavLink>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </NavLink>
      </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button");
    //Assert
    expect(loginbutton).toBeInTheDocument();
  });
});
