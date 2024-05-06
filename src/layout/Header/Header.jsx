import React from 'react';
import '/public/css/main.scss';

function Header() {
  // On récupère l'URL
  const currentUrl = window.location.pathname;

  // On vérifie si l'URL contient "/user"
  const isUserPage = currentUrl.includes('/user');

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>

        {isUserPage && (
          <a className="main-nav-item" href="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        )}
      </div>
    </nav>
  );
}

export default Header;
