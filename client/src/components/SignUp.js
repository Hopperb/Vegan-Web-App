import React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'

class SignUp extends Component{
    constructor (props) {
        super(props); {
            this.state = {
                email: '',
                password: ''
            }
        }
   
    // register = event => {
    //     event.preventDefault();
    //     const {username, password} = this.state
    
    //     axios
    //     .post('http://localhost:5500/api/register', {username, password})
    //     .then((response) => {
    //         this.setState({login: response.data, username:'', password:''})
    //     })
    //     .catch(err => {
    //         console.log('error', err)
    //     })
    // }
    
    // handleInput = e => {
    //     this.setState({[e.target.name]: e.target.value})
    // }
    
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
                    <Button color="success">Submit</Button>
                    <Link to="/"><Button color="primary">Home</Button></Link>
                </Form>
             </div>
        )
    }  
}

export default SignUp;