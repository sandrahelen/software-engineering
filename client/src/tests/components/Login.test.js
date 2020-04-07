import { unmountComponentAtNode, render } from "react-dom";
import React, { Component } from "react";
import { act } from "react-dom/test-utils";
import Login from "../../components/login/Login";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));

it("Tests correct rendering", () => {

    act( ()=> {
        render(<Login/>,container);
    });
    expect(container.textContent).toContain("Brukernavn: Passord:");
});



