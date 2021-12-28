import React,{useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase"

function Login() {
    const history = useHistory();
    const[email,setEmail]=  useState('')
    const[password,setPassword]=  useState('')
    function signIn(e){
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth) => {
            if(auth){
                history.push('/')
            }

        })
        .catch(error => alert(error.message))
        
        
    } 
    function register(e){
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            if(auth){
                history.push('/')
            }

        })
        .catch(error => alert(error.message))
        
    } 
    return (
        <div className="login">
            <Link to="/">
            <img
            className="login__logo"
            src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png" />
            </Link>
            <div className="login__container">
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password"  value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" onClick={signIn} className="login__signInButton">Sign in</button>


            </form>
            <p>
            By Signing in, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
            </p>
            <button type="submit" onClick={register}  className="login__registerButton">Create The Amazon Account</button>

            </div>
            
        </div>
    )
}

export default Login
