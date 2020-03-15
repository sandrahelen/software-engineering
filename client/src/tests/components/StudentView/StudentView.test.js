import { unmountComponentAtNode, render } from "react-dom";
import React, { Component } from "react";
import { act } from "react-dom/test-utils";
import StudentView from "../../../components/studentView/StudentView";
import { MemoryRouter } from "react-router-dom";

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

it("Tests correct rendering", () => {

    act( ()=> {
        render(
            <MemoryRouter>
                <StudentView location="Lerkendal" />
            </MemoryRouter>
        ,container);
    });
    expect(container.textContent).toContain("Kollektiv Nr");
});



