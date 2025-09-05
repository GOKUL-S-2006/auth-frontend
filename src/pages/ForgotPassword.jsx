import { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";
import Button from "../components/Button";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/forgot-password", {
        email,
      });
      alert("Password reset link sent to your email!");
    } catch  {
      alert("Error sending reset link");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgot}>
        <InputField type="email" placeholder="Enter your email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit" text="Send Reset Link" />
      </form>
    </div>
  );
}

export default ForgotPassword;
