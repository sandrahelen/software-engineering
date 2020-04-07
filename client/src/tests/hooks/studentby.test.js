import { unmountComponentAtNode, render } from "react-dom";
import React, { Component } from "react";
import { act } from "react-dom/test-utils";
import {useCampuses} from "../../hooks/studentby/index";
import { renderHook} from '@testing-library/react-hooks'
import axios from "axios";

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

jest.mock("axios");

it("Checking for basic rendering", () => {

    const resp = {
        "_id": "5e5bfced94e2442eaf559c3f",
        "vaskeliste": "5e552a301c9d440000a0d76a",
        "navn": "Lerkendal Studentby",
        "admin": "5e5bf1b6ff72ba1ff4383bc1",
        "__v": 0
    }
    axios.get.mockResolvedValue(resp);
    const { result } = renderHook(() => useCampuses("5e5bf1b6ff72ba1ff4383bc1"));

    console.log(result.current);
    expect(result).toBeDefined();
});



