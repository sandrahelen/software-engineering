import { unmountComponentAtNode, render } from "react-dom";
import React, { Component } from "react";
import { act } from "react-dom/test-utils";
import {index,  useAdmin} from "../../hooks/admin/index";
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
        "username": "huseier",
        "password": "$2a$10$lp2qaud8f6g05KNFquXSv.4RMjRP0ZmdIsJ5fUX5gEYmEKVYLxTCS",
        "_id": "5e568071e3d8c229f4d9ae87",
        "__v": 0
    }
    axios.get.mockImplementation(() => Promise.resolve(resp));
    const { result } = renderHook(() =>  useAdmin("5e568071e3d8c229f4d9ae87"));
    console.log(result.current)
    expect(result).toBeDefined();
});


