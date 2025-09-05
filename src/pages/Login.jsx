import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      alert("Login successful!");
       window.location.href = "https://github.com/GOKUL-S-2006";
      console.log(res.data);
    } catch  {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <InputField type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" text="Login" />
      </form>
      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
}

export default Login;
