import React, { useContext, useState } from 'react';
import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import "./Loginform.css";


function Login() {

    const[user ,setUser]=useState({
        isSignedIn :false,
        email:'',
        password:'',
        
    })   

    const[loggedInUser,setLoggedInUser]=useContext(UserContext)

                        const history = useHistory();
                    const location = useLocation();
                    
                    const { from } = location.state || { from: { pathname: "/" } };
                    

        if(firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig);
        }
    
    const handleGoogleSignIn = () => {
        
        
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName ,email} = result.user;
                const signedInUser ={Name: displayName,email}
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });

    };

    const handleBlur = (e) =>{
       let isFormValid = true;
        if(e.target.name === 'eamil'){
            isFormValid =/\S+@\S+\.\s+/.test(e.target.value);
                    
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.le > 4;
            const passwordHasNumber =/\d{1}/.test(e.target.value);
            isFormValid=isPasswordValid && passwordHasNumber;
            
        }
        if (isFormValid){
            
            const newUserInfo ={...user};
            newUserInfo[e.target.name]= e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
              // Signed in 
              var user = userCredential.user;
              // ...
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              // ..
            });
        }
        e.preventDefault();
    }


    return (
        <div style={{ width: '23rem',height:'15rem' }} className="text-center container bg-danger "  >
            <div  >
            <h4  className=" mb-3">Login from</h4>            
            
            <form onSubmit={handleSubmit}>
                <input className="mb-3" type="text" name="email" onBlur={handleBlur}  placeholder='Your Email Address' required/>
                <br/>
                <input className="mb-3" type="password" name="password" onBlur={handleBlur}  placeholder="Your Password" required/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            
            
            </div>
            <div>
                <br></br>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
            </div>
        </div>
    );
}

export default Login;