import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Transactions from "./components/pages/Transactions";
import Login from "./components/pages/Login";
import { mockData } from "./mockData/mockData";

function App() {
  const [user, setUser] = useState(null);

  // Handle login
  const handleLogin = (email, password) => {
    const foundUser = mockData.users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert("Invalid email or password.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
  };

  // Update user balance
  const updateBalance = (newBalance) => {
    setUser((prevUser) => ({ ...prevUser, balance: newBalance }));
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {user ? (
            <>
              <Route
                path="/transactions"
                element={
                  <Transactions
                    user={user}
                    transactions={mockData.transactions}
                    updateBalance={updateBalance}
                  />
                }
              />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
