import { useState } from "react";
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleEmailSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Sign-up successful!");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Logged in with email!");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      alert("Logged in with Google!");
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      alert("Logged out!");
    } catch (error) {
      console.error("Sign-out error:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
      {user ? (
        <div className="text-center">
          <h2 className="text-xl font-bold">Welcome, {user.displayName || user.email}</h2>
          <button onClick={handleSignOut} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Sign Out</button>
        </div>
      ) : (
        <div className="w-full max-w-xs">
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
          <button onClick={handleEmailSignIn} className="w-full px-4 py-2 my-2 bg-blue-500 text-white rounded">
            Sign In with Email
          </button>
          <button onClick={handleEmailSignUp} className="w-full px-4 py-2 my-2 bg-green-500 text-white rounded">
            Sign Up with Email
          </button>
          <button onClick={handleGoogleSignIn} className="w-full px-4 py-2 my-2 bg-yellow-500 text-white rounded">
            Sign In with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
