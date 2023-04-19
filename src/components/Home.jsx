import Login from "./Login.jsx"
import Signup from "./Signup.jsx"
import{useState} from "react"
import { Button } from "react-bootstrap";



export default function Home (){
    const[isMember,setIsMember]= useState(true);
    return(
        <>
        {
        (IsMember)
        ?<Login/>

        :<Signup/>
        
        }
        <Button onClick={()=> setIsMember(!isMemeber)}>Switch Form</Button>
        </>
    )
}