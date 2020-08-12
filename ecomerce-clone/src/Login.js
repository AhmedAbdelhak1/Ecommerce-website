import React,{useState} from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = event =>{
        event.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/");
        }

        )
        .catch(e =>alert(e.message));
    }
    const register = event =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/");

        })
        .catch(e =>alert(e.message));

    }
    return (
        <div className="login">
            <Link to ="/">
            <img className="login__logo" src="Basket.png" alt="" />

            </Link>
            <div className="login__container">
            <h1>Sign In</h1>
            <form>
            <h5>Email</h5>
            <input value={email} type="email" onChange={event=> setEmail(event.target.value)}></input>
            <h5>Password</h5>
            <input value={password} type="password" onChange={event=> setPassword(event.target.value)}></input>
            <button onClick={login} type="submit" className="login__signbutton">Sign In</button>
            

            </form>
            <button  onClick={register} type="submit" className="login__createbutton">Create Account</button>
                
            </div>
            
        </div>
    )
}

export default Login
