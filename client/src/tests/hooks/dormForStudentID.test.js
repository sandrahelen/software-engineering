import { unmountComponentAtNode, render } from "react-dom";
import React, { Component } from "react";
import { act } from "react-dom/test-utils";
import {index,  useDormWithDormId} from "../../hooks/dormForStudentID/index";
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

it("Basic test for correct rendering", () => {

    const resp = {
        "_id": "5e5bfced94e2442eaf559c3f",
        "vaskeliste": "5e552a301c9d440000a0d76a",
        "navn": "Lerkendal Studentby",
        "admin": "5e5bf1b6ff72ba1ff4383bc1",
        "__v": 0
    }
    axios.get.mockImplementation(() => Promise.resolve(resp));
    const { result } = renderHook(() =>  useDormWithDormId("5e5bfced94e2442eaf559c3f"));
    expect(result).toBeDefined();
});



