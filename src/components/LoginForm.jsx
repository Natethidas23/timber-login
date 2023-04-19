import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react";

export default function LoginForm(){
    const[email,setEmail]= useState();
    const[password, setPassword] = useState();

    const handleForm = e =>{
        const newValue = e.target.value.trim()
        console.log(e.target,newValue)
    }

    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter Email" />
                <Form.Text>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            
            <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="Password"
            placeholder="Enter Password"
            onChange={handleForm}/>
            </Form.Group>

            <Form.Group>
                <Button
                variant="success"
                size="lg"
                type="submit">Login</Button>
                </Form.Group>
                
                </Form>

        </>
    )
}