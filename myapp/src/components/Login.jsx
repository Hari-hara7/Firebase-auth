// src/components/Login.js
import { useState } from "react";
import { auth, signInWithEmailAndPassword, signInWithPopup, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/main");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/main");
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold">Login</h2>
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
      <button onClick={handleEmailLogin} className="w-full px-4 py-2 my-2 bg-blue-500 text-white rounded">
        Login with Email
      </button>
      <button onClick={handleGoogleLogin} className="w-full px-4 py-2 my-2 flex items-center justify-center bg-yellow-500 text-white rounded">
        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
        Login with Google
      </button>
    </div>
  );
};

export default Login;
