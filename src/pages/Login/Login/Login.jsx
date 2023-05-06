import React, { useContext } from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseTitle from '../../../UseTitle/UseTitle';
import { AuthContext } from '../../../providers/AuthProvider';


const Login = () => {
    UseTitle('Login')
    const{login, loding} = useContext(AuthContext)
    const naviget = useNavigate()
    const location = useLocation()
    console.log(location);
    const from = location.state?.form?.pathname ||'/category/0'
    const hendelForm = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if(loding){
            return <Spinner animation="border" variant="primary" />
        }
        if(password.length < 5){
            console.log('pleaces enter the 6 digit');
        }
        login(email,password)
        .then(result => {
            const user =result.user
            console.log(user);
            naviget(from, {replace: true})
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={hendelForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;