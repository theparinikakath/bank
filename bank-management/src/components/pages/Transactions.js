import React, { useState } from "react";

const Transactions = ({ user, transactions, updateBalance }) => {
  const [newTransaction, setNewTransaction] = useState({
    description: "",
    amount: "",
  });

  const handleTransaction = (e) => {
    e.preventDefault();
    const amount = parseFloat(newTransaction.amount);

    if (isNaN(amount)) {
      alert("Please enter a valid amount.");
      return;
    }

    const updatedBalance = user.balance + amount; // Deduct or add based on positive/negative
    if (updatedBalance < 0) {
      alert("Insufficient balance!");
      return;
    }

    // Update balance and reset transaction form
    updateBalance(updatedBalance);
    setNewTransaction({ description: "", amount: "" });
  };

  return (
    <div className="container">
      <h2 className="mb-4 text-center text-primary">Welcome, {user.name}!</h2> {/* Welcome message */}
      <p className="lead text-center mb-4">Current Balance: <span className="fw-bold">${user.balance.toFixed(2)}</span></p>
      
      {/* Transaction Form */}
      <div className="transaction-form mb-4 p-4 border rounded shadow-lg">
        <form onSubmit={handleTransaction} className="text-center">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Description"
              value={newTransaction.description}
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, description: e.target.value })
              }
              className="form-control form-control-sm text-center"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              placeholder="Amount (negative for withdrawal)"
              value={newTransaction.amount}
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, amount: e.target.value })
              }
              className="form-control form-control-mt text-center"
              required
            />
          </div>
          <button type="submit" className="btn btn-mt btn-success transaction-btn">
            Perform Transaction
          </button>
        </form>
      </div>

      {/* Transaction History */}
      <h3 className="mt-4 text-center text-info">Transaction History</h3>
      <ul className="list-group mt-2">
        {transactions.map((t, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center shadow-sm rounded-3 mb-2 ${t.amount < 0 ? 'bg-danger text-white' : 'bg-success text-white'}`}
          >
            <span>{t.date} - {t.description}</span>
            <span>${t.amount}</span>
          </li>
        ))}
      </ul>

      {/* Inline CSS */}
      <style jsx>{`
        .transaction-btn {
          width: 100%; /* Default: Full width on smaller screens */
        }

        /* For larger screens (landscape mode), reduce button width and center it */
        @media (min-width: 768px) {
          .transaction-btn {
            width: 50%; /* Button becomes 50% of container width */
            margin: 0 auto; /* Center it horizontally */
          }
        }

        /* Additional styles */
        .form-control-sm {
          text-align: center;
        }

        .transaction-form {
          margin-top: 20px;
        }

        .list-group-item {
          padding: 15px;
          font-size: 16px;
        }

        .list-group-item.bg-danger {
          background-color: #e74c3c !important;
        }

        .list-group-item.bg-success {
          background-color: #2ecc71 !important;
        }

        /* Responsive adjustments */
        @media (max-width: 767px) {
          .transaction-form {
            padding: 20px;
          }

          .list-group-item {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Transactions;
