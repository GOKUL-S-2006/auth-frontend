import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import InputField from "../components/InputField";
import Button from "../components/Button";

const API_URL = import.meta.env.VITE_API_URL;
 // ✅ uses environment variable

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${API_URL}/api/auth/reset-password/${token}`,
        { password }
      );
      alert(res.data.message || "Password reset successful!");
      navigate("/"); // redirects user to Login page after reset
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <InputField
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" text="Reset Password" />
      </form>
    </div>
  );
}

export default ResetPassword;
