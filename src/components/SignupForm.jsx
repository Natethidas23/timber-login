import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxhMNvW0QT6k8NLSx57M6fyCgoui8vpr8",
  authDomain: "timber-login-nt-ed5c1.firebaseapp.com",
  projectId: "timber-login-nt-ed5c1",
  storageBucket: "timber-login-nt-ed5c1.appspot.com",
  messagingSenderId: "6312438401",
  appId: "1:6312438401:web:1150cbbda13245c97dfb80",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const handleSignup = async (e) => {
    e.preventDefault();
    const results = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch(alert);
    setUser(results.user);
  };

  const signInWithGoogle =async()=> {
    const provider = new GoogleAuthProvider()
    const results = await signInWithPopup(auth.provider)
    .catch(alert)
    setUser(results.user)
}

  if (user) {
    return <h2>Welcome User</h2>;
  }

  return (
    <>
      <Form onSubmit={handleSignup}>

      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text>We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Button variant="dark" size="lg" type="submit">
          Sign Up With Google</Button>
      </Form.Group>

      </Form>
    </>
  );
}
