import React from "react";
import {render, cleanup} from "react-testing-library";
import App from "../components/App";

describe("Zadanie 4", () => {

  afterEach(() => cleanup());

  beforeEach(() => {
    window.location.hash = "#/platform";
  });

  it("launch rocket", () => {
    jest.useFakeTimers();

    const {getByText, container} = render(<App/>);

    getByText("Dodaj rakietę").click();

    const button = getByText("Launch");
    button.click();

    jest.runOnlyPendingTimers();
    expect(button.innerHTML).toEqual("4");

    jest.runOnlyPendingTimers();
    expect(button.innerHTML).toEqual("3");

    jest.runOnlyPendingTimers();
    expect(button.innerHTML).toEqual("2");

    jest.runOnlyPendingTimers();
    expect(button.innerHTML).toEqual("1");

    jest.runOnlyPendingTimers();
    expect(button.innerHTML).toEqual("0");

    expect(container.querySelector(".rocket__image").className).toContain("launched");
  });

});
