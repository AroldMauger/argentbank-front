import React from 'react';
import WelcomeUser from '../../components/WelcomeUser/WelcomeUser.jsx';
import Transaction from '../../components/Transaction/Transaction.jsx';
import { useSelector } from 'react-redux';

function UserPage() {
  const auth = useSelector(state => state.auth); 
  const user = auth.user;

  return (
    <main className="main bg-dark">
      <WelcomeUser firstname={user.firstName} lastname={user.lastName}/>
      
      {/* On utilise .map sur le tableau de transactions depuis le state */}
      {user.transactions.map((transaction, index) => (
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
