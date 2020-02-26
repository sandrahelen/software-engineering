import React, { useState } from "react";
import axios from "axios";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import AdminView from "../adminView/AdminView";
import Routes from "../Routes";
import "./Login2.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function isValidForm() {
    let t = signIn();
    return username.length >> 0 && password.length >> 0 && t;
  }

  function handleSubmit(event) {
    event.preventDefault();

    signIn();
  }

  function signIn() {
    const lookup = "http://localhost:5000/api/user/username/" + username;
    axios.get(lookup).then(response => {
      if (response.data.length === 0) {
        console.log("No user");
        return false;
      } else {
        let match = response.data[0].password === password;
        if (match && response.data[0].admin === true) {
          console.log(response);
          return true;
        } else if (match) {
          console.log("not user");
          return false;
        } else {
          console.log("password no match");
          return false;
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
        <Link to="/AdminView">
          <Button
            style={{
              height: 35,
              width: 70,
              color: "green",
              fontWicht: "bold",
              borderRadius: 10,
              fontSize: 20
            }}
            disabled={isValidForm()}
            type="submit"
          >
            Login
          </Button>
        </Link>
      </form>
    </div>
  );
}
