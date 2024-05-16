import React, { useEffect, useState } from 'react';
import "./signinform.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authThunk } from '../../redux/AuthThunk.jsx';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      navigate('/user');
    }
  }, [token, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authThunk({ email, password }));
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            required 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            required 
            value={password} 
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign in</button>
      </form>
    </section>
  );
}

export default SignInForm;
