import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseTitle from '../../../UseTitle/UseTitle';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    UseTitle('Register')
    const [error, setError]= useState('')
    const [accepted, setAccepted] = useState(false)
    const{createEmailPassword} = useContext(AuthContext)
    const hendelForm = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 7){
            setError('pleace password in 6 digit')
        }
        createEmailPassword(email, password)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(error =>{
            console.log(error.message);
        })
        // console.log(email, password);
    }
    const hendelAccepted = event =>{
        setAccepted(event.target.checked)
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={hendelForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={hendelAccepted}
                    type="checkbox"
                     name="accept" 
                     label={<>Accept <Link to='/trims'>Terms and Conditions</Link></>} />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;