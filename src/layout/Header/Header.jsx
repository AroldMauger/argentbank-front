import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/AuthSlice';


function Header() {
  // On utilise useSelector pour accéder au token et au firstName dans le state Redux
  const token = useSelector(state => state.auth.token);
  const firstName = useSelector(state => state.auth.firstName);
  const dispatch = useDispatch();

  // On déclare la fonction de gestion du logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            
            <Link className="main-nav-item" to="/" onClick={handleLogout}> {/*On ajoute la fonction logout pour réinitialiser le state */}
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
