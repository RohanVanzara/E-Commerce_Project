  import React, { useState } from "react";
  import "./Newarrival.css"; // Import the external CSS file

  const Newarrival = () => {
    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch("http://localhost:8081/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok) {
          alert("Subscription Successful!");
          console.log("Subscribed:", data);
          setEmail(""); // Clear input field after success
        } else {
          alert(data.msg || "Subscription failed. Try again.");
        }
      } catch (error) {
        console.error("Subscription error:", error);
        alert("Server error. Please try again later.");
      }
    };


    return (
      <div className="newarrival-container">
        <h2 className="newarrival-heading">New Arrivals</h2>
        <p className="newarrival-subtext">
          Sign up to receive updates on new arrivals item and special offers...
        </p>
        <form onSubmit={handleSubmit} className="newarrival-form">
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newarrival-input"
          />
          <button type="submit" className="newarrival-button">Subscribe</button>
        </form>
        <div className="newarrival-checkbox-container">
          <input
            type="checkbox"
            id="subscribe"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="newarrival-checkbox"
          />
          <label htmlFor="subscribe" className="newarrival-label">
            Yes, subscribe for your new arrival. *
          </label>
        </div>
      </div>
    );
  };

  export default Newarrival;
