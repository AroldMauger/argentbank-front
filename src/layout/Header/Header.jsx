import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
 

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
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
          <>
            <Link className="main-nav-item" to="/" > 
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
      </div>
    </nav>
  );
}

export default Header;