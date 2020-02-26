import React, { useState } from "react";
import axios from "axios";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Switch, Route, useHistory } from "react-router-dom";
import Vaskeliste from "../vaskeliste/Vaskeliste";
import Routes from "../Routes";
import "./Login2.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function isValidForm() {
    return username.length >> 0 && password.length >> 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    signIn();
  }

  function signIn() {
    const lookup = "http://localhost:5000/api/user/username/" + username;
    axios.get(lookup).then(response => {
      if (response.data.length === 0) {
        alert("No user");
      } else {
        let match = response.data[0].password === password;
        if (match && response.data[0].admin === true) {
          console.log("password match and admin");
          let x = document.getElementsByClassName("App");
          ReactDOM.render(<AdminView />, x[0]);
        } else if (match) {
          alert("not user");
        } else {
          alert("password no match");
        }
      }
    });
  }

  return (
    <div className="Login" id="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controllId="username">
          <FormLabel
            style={{
              fontSize: 25
            }}
          >
            Username:{" "}
          </FormLabel>
          <br />
          <FormControl
            style={{
              height: 25,
              width: 350,
              fontSize: 20
            }}
            type="Username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controllId="password">
          <FormLabel
            style={{
              fontSize: 25
            }}
          >
            Password:{" "}
          </FormLabel>
          <br />
          <FormControl
            style={{
              height: 25,
              width: 350,
              fontSize: 20
            }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <br />
        <Button
          style={{
            height: 35,
            width: 70,
            color: "green",
            fontWicht: "bold",
            borderRadius: 10,
            fontSize: 20
          }}
          disabled={!isValidForm()}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
