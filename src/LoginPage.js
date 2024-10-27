// src/LoginPage.js
import React, { useState } from 'react';
import { auth, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Handle successful login
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, signupPassword)
      .then((userCredential) => {
        // Handle successful sign-up
        console.log(userCredential.user);
        setShowSignup(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        console.log(result.user);
        setShowSignup(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{showSignup ? 'Sign Up' : 'Login Page'}</h2>
        {showSignup ? (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Manufacturer Name"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            />
            <button onClick={handleSignUp} className="signup-button">Sign Up</button>
            <button onClick={handleGoogleSignUp} className="signup-button">Sign Up with Google</button>
            <p className="signup-link">
              Already have an account? <span onClick={() => setShowSignup(false)}>Login</span>
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="login-button">Login</button>
            <p className="signup-link">
              Don't have an account? <span onClick={() => setShowSignup(true)}>Sign up</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
