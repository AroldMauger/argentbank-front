import React, { useState, useEffect } from 'react';
import "./welcomeuser.scss";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../redux/AuthThunk.jsx';

function WelcomeUser() {
  const userFirstName = useSelector((state) => state.auth.firstName); // prénom depuis le store Redux
  const userLastName = useSelector((state) => state.auth.lastName);   // nom depuis le store Redux
  const userToken = useSelector((state) => state.auth.token);       // token depuis le store Redux

  const [editNameForm, setEditNameForm] = useState(false);
  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);

  const dispatch = useDispatch();

  const updateProfile = () => {
    setEditNameForm(true);      // On affiche le formulaire
  };

  const handleSave = async () => {
    await dispatch(updateUserData({ token: userToken, firstName, lastName })); // On met à jour le store avec dispatch
    setEditNameForm(false); // On ferme le formulaire
  };

  // Quand on clique sur Cancel on retrouve le nom et prénom depuis le store Redux
  const handleCancel = () => {
    setFirstName(userFirstName);   
    setLastName(userLastName);
    setEditNameForm(false);
  };

  // ici useEffect permet de mettre à jour les variables firstName et lastName déclarées plus haut avec les valeurs depuis le store Redux
  useEffect(() => {
    setFirstName(userFirstName);
    setLastName(userLastName);
  }, [userFirstName, userLastName]);
  
  return (
    <div>
      {/*quand editNameForm = false */}
      {!editNameForm ? (  
        <div className='header'>
          <h1>
            Welcome back
            <br />
            {userFirstName} {userLastName}
          </h1>
          <button className='edit-button' onClick={updateProfile}>
            Edit Name
          </button>
        </div>
      ) 
      : (
        // quand editNameForm = true
        <div className='header'>
          <h1>Welcome back</h1>
          <div className='edit-form'>
            <div className='inputs-form save-block'>
              <input
                type='text'
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={firstName}         
                className='input-username'
              />
               <button className='save-btn btn-editform' onClick={handleSave}>
                Save
              </button>
            </div>
            <div className='inputs-form cancel-block'>
              <input
                type='text'
                onChange={(e) => setLastName(e.target.value)}
                placeholder={lastName}
                className='input-username'
              />
               <button className='cancel-btn btn-editform' onClick={handleCancel}>
                Cancel
              </button>
            </div> 
          </div>
        </div>
      )}
    </div>
  );
}

export default WelcomeUser;
