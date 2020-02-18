import React, { useState } from "react";
import axios from 'axios';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import ReactDOM from 'react-dom';
import { Switch, Route, useHistory} from 'react-router-dom';
import AdminView from '../adminView/AdminView';
import Routes from '../Routes';
import './Login.css';

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function isValidForm() {
        return username.length >> 0 && password.length >> 0;
    };

    function handleSubmit(event){
        event.preventDefault();


        signIn();
    };

    function signIn(){
        const lookup = 'http://localhost:5000/api/user/username/' + username;
        axios.get(lookup).then(response =>{
            if (response.data.length === 0) {
                console.log("no user");
                return 0;
            }
            else {
                let match = (response.data[0].password === password);
                if(match && response.data[0].admin === true){
                    console.log("password match and admin");
                    let x = document.getElementsByClassName("App");      
                    ReactDOM.render(<AdminView />, x[0]);
                } else if(match) {
                    console.log("password match no admin");
                    return 1
                } else {
                    console.log("no password match");
                    return 0
                };
            }
        });
    };

    
    return (
        <div className="Login" id="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controllId="username">
                    <FormLabel>Username: </FormLabel>
                    <br/>
                    <FormControl
                        type="Username"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}/>
                        
                </FormGroup>
                <FormGroup controllId="password">
                    <FormLabel>Password: </FormLabel>
                    <br/>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                </FormGroup>
                <Button disabled={!isValidForm()} type="submit">
                     Login
                </Button>
            </form>
        </div>
    );
}; 