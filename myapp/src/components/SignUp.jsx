// src/components/SignUp.js
import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Store additional user info here if needed
      alert("Sign-up successful!");
      navigate("/login");  // Navigate to login after signup
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 my-2 border border-gray-300 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="USN"
        className="w-full p-2 my-2 border border-gray-300 rounded"
        value={usn}
        onChange={(e) => setUsn(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 my-2 border border-gray-300 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 my-2 border border-gray-300 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp} className="w-full px-4 py-2 my-2 bg-blue-500 text-white rounded">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
