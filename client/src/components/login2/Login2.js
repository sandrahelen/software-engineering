import React, { useState } from "react";
import axios from "axios";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { API_URL } from '../../URLs'
import "./Login2.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();


  function isValidForm() {
    return username.length >> 0 && password.length >> 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function signIn() {

    const lookup = `${API_URL}/user/login`;
    axios.post(lookup,{
        "username": username,
        "password": password
    }).then(response => {
        console.log(response);
        if(response.status === 200){
            history.push(`/StudentView?username=${username}`);
        } else {
            alert("Invalid login attempt");
        };
    }).catch(e => {
          console.log(e);
          alert("Invalid Login");
    })
  };

  return (
    <div className="Login" id="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controllid="username">
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
        <FormGroup controllid="password">
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
          <Button
            className="Login2__submit"
            type="submit"
            disabled={!isValidForm}
            onClick={signIn}
          >
            Login
          </Button>
      </form>
    </div>
  );
}
