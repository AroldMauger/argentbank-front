import React from 'react'
import "/public/css/main.scss";
import Header from '../../layout/Header/Header.jsx';
import SignInForm from '../../components/SignInForm/SignInForm.jsx';
import Footer from '../../layout/Footer/Footer.jsx';

function SignIn() {
  return (
    <main className="main bg-dark">
      <SignInForm/>
      </main>
     );
}

export default SignIn;