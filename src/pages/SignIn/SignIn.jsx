import React from 'react'
import "/public/css/main.scss";
import SignInForm from '../../components/SignInForm/SignInForm.jsx';

function SignIn() {
  return (
    <main className="main bg-dark">
      <SignInForm/>
      </main>
     );
}

export default SignIn;