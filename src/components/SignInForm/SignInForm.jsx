import React, { useState } from 'react'
import "/public/css/main.scss";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Store/UserSlice.jsx';
import { useNavigate } from 'react-router-dom';

function SignInForm() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading, error} = useSelector((state) =>state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginEvent=(event)=>{
    event.preventDefault();
    let userCredentials = {
      email, password
    }
    dispatch(loginUser(userCredentials)).then((result)=>{
      if(result.payload){
        setEmail('');
        setPassword('');
        navigate('/user');
      }
    })
  }

  return (
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLoginEvent}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required value={email} onChange={(event) =>setEmail(event.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required value={password} onChange={(event) =>setPassword(event.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">{loading?'Loading...' : 'Sign in'}</button>
          {error&&(
            <div className='alert alert-danger' role='alert'>{error}</div>
          )}
        </form>
      </section>
    )
}

export default SignInForm