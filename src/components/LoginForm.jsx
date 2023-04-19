import Form from "react-bootstrap/Form"
import {initializeApp} from 'firebase/app'
import {getAuth ,signInWithEmailAndPassword} from 'firebase/auth'
import Button from "react-bootstrap/Button"
import { useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyAxhMNvW0QT6k8NLSx57M6fyCgoui8vpr8",
    authDomain: "timber-login-nt-ed5c1.firebaseapp.com",
    projectId: "timber-login-nt-ed5c1",
    storageBucket: "timber-login-nt-ed5c1.appspot.com",
    messagingSenderId: "6312438401",
    appId: "1:6312438401:web:1150cbbda13245c97dfb80"
  };
  
const app= initializeApp(firebaseConfig);
const auth = getAuth(app);


export default function LoginForm(){
    const[email, setEmail]= useState("");
    const[password, setPassword] = useState("");
    const [user,setUser]= useState()

    const handleLogin = async (e) => {
        e.preventDefault()
         const response = await signInWithEmailAndPassword(auth,email,password)
        .catch(err => alert(err));
        setUser(response.user);
    }

    if(user){
        return<h2>Welcome User{user.uid}</h2>
    }


    return (
        <>
        <Form onSubmit={handleLogin}>
            <Form.Group className='mb-3'>

                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email} onChange={e => setEmail(e.target.value)} />
                <Form.Text>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            
            <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="Password"
            placeholder="Enter Password"
             value={password} onChange={e => setPassword(e.target.value)}/>
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