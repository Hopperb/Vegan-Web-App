import React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Login extends Component{
    constructor (props) {
        super(props); {
            this.state = {
                email: '',
                password: ''
            }
        }
        
    }
    render() {
        return (
             <div>
                <Form>
                    <FormGroup>
                        <Label for="email" hidden>Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email"/>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="password" hidden>Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password"/>
                    </FormGroup>
                    {' '}
                    <Button>Submit</Button>
                    <Button>Home</Button>
                </Form>
             </div>
        )
    }  
}

export default Login;