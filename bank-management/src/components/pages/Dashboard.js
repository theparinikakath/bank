import React from "react";

const Dashboard = ({ user }) => {
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Account Number: {user.accountNumber}</p>
      <p>Account Balance: ${user.balance}</p>
    </div>
  );
};

export default Dashboard;
