import React from "react";
import {render, cleanup} from "react-testing-library";
import App from "../components/App";

describe("Zadanie 3", () => {

  afterEach(() => cleanup());

  beforeEach(() => {
    window.location.hash = "#/platform";
  });

  it("add/remove buttons", () => {

    const {getByText, container} = render(<App/>);

    expect(container.querySelectorAll(".rocket").length).toEqual(0);

    getByText("Dodaj rakietę").click();
    expect(container.querySelectorAll(".rocket").length).toEqual(1);

    getByText("Usuń rakietę").click();
    expect(container.querySelectorAll(".rocket").length).toEqual(0);
  });

});
