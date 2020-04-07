import { unmountComponentAtNode, render } from "react-dom";
import React, { Component } from "react";
import { act } from "react-dom/test-utils";
import {useUser} from "../../hooks/user/index";
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
        username: "Ole Jacob",
        password: "passord",
        _id: "5e74a81d9147430dda0229bd",
        kollektiv: "5e738a947a41d64c7dd386cf",
        fornavn: "test",
        etternavn: "test"
    }
    axios.get.mockResolvedValue(resp);
    const { result } = renderHook(() => useUser("5e738a947a41d64c7dd386cf"));
    console.log(result.current);
    expect(result).toBeDefined();
});



