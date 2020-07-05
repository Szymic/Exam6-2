import React from "react";
import {render, cleanup} from "react-testing-library";
import App from "../components/App";

describe("Zadanie 1", () => {

  afterEach(cleanup);

  it("renders links", () => {
    const url = ["/", "/platform", "/about"];
    const text = ["Strona główna", "Platforma", "O aplikacji"];

    const { container } = render(<App/>);

    container.querySelectorAll("a").forEach((el, index) => {
      expect(el.innerHTML).toContain(text[index]);
      expect(el.href).toContain(url[index]);
    });
  });

  it("active link should be styled", () => {
    window.location.hash = "#/about";

    const { getByText } = render(<App/>);

    expect(getByText("O aplikacji").style.color).toEqual("red");
    expect(getByText("O aplikacji").style.fontWeight).toEqual("bold");
  });

  it("renders Main", () => {
    window.location.hash = "#/";

    const { getByText } = render(<App/>);

    expect(getByText("Witaj w aplikacji rocket launch")).not.toBe(null);
  });

  it("renders About", () => {
    window.location.hash = "#/about";

    const { getByText } = render(<App/>);

    expect(getByText("Aplikacja rocket launch w ramach egzaminu")).not.toBe(null);
  });

  it("renders NotFound in case of wrong url", () => {
    window.location.hash = "#/to/nie/jest/poprawna/ścieżka";

    const { getByText } = render(<App/>);

    expect(getByText("404 - nie znaleziono strony")).not.toBe(null);
  });

});
