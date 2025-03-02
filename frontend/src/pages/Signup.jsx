import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ff9a9e, #fad0c4); /* Gradient Background */
`;

const SignupForm = styled.div`
  background: rgba(255, 255, 255, 0.15); /* Glassmorphism Effect */
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: fadeIn 0.5s ease-in-out;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #ff6b81;
    box-shadow: 0 0 5px rgba(255, 107, 129, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #ff6b81;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #e05670;
    transform: scale(1.05);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  font-weight: bold;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  font-weight: bold;
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email.trim())) {
      setError("Invalid email address!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    localStorage.setItem("userEmail", email.trim());
    localStorage.setItem("userPassword", password);
    setSuccess("Signup Successful! Redirecting to login...");
    
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <SignupContainer>
      <SignupForm>
        <h2>🚀 Create Your Account</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <form onSubmit={handleSignup}>
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit">Signup</Button>
        </form>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
