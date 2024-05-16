import React, { useEffect } from 'react';
import WelcomeUser from '../../components/WelcomeUser/WelcomeUser.jsx';
import Transaction from '../../components/Transaction/Transaction.jsx';
import { useSelector, useDispatch } from 'react-redux';
import "./userpage.scss";
import { fetchUserProfile } from '../../redux/AuthThunk.jsx';
import { userData } from "../../data/userdata.js";

function UserPage() {
  const dispatch = useDispatch();
  const { token, userId, firstName, lastName } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [token, dispatch]);

  // On filtre les données de transactions en fonction de l'userId
  const user = userData.find(user => user.userId === userId);
  const transactions = user ? user.transactions : [];

  return (
    <main className="main bg-dark">
      <WelcomeUser 
        firstname={firstName} 
        lastname={lastName}
      />
      
      {transactions.map((transaction, index) => (
        <Transaction
          key={index}
          accountType={transaction.accountType}
          amount={transaction.amount}
          status={transaction.status}
        />
      ))}
    </main>
  );
}

export default UserPage;
