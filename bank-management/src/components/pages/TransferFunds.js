import React, { useState } from "react";

const TransferFunds = () => {
  const [formData, setFormData] = useState({
    recipient: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Transferred $${formData.amount} to ${formData.recipient}`);
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Recipient</label>
          <input
            type="text"
            name="recipient"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            name="amount"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Transfer</button>
      </form>
    </div>
  );
};

export default TransferFunds;
