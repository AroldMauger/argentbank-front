import React from 'react'
import "/public/css/main.scss";

function WelcomeUser(props) {
  
  
  return (
    <div className="header">
        <h1>Welcome back<br />{props.firstname} {props.lastname}!</h1>
        <button className="edit-button">Edit Name</button>
    </div>  
      )
}

export default WelcomeUser