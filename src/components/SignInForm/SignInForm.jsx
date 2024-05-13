import React, { useEffect, useState } from 'react'
import "./signinform.scss";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../service.jsx';
import { useNavigate } from 'react-router-dom';
import { authThunk } from '../../redux/AuthThunk.jsx';

function SignInForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector((state) => state.auth.isConnected);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const error = useSelector((state) => state.auth.error);

  // Si utilisateur connecté, on est redirigé vers la route /user
  useEffect(() => {
    if (isConnected) {
      navigate('/user');
    }
  })

  // Fonction pour la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();  // on évite le rechargement automatique de la page
    try {
      // avec Redux, toutes les mises à jour de l'état de l'application sont effectuées en envoyant des actions à un store Redux via la fonction dispatch.
      dispatch(authThunk({ email, password }));   
    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
  };

  return (
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
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
          <button className="sign-in-button">{isLoading?'Loading...' : 'Sign in'}</button>
          {error&&(
            <div className='alert alert-danger' role='alert'>{error}</div>
          )}
        </form>
      </section>
    )
}

export default SignInForm