// src/components/MainPage.js

import { auth, signOut } from "../firebase";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Sign-out error:", error.message);
    }
  };

  const user = auth.currentUser;

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold">Welcome to Main Page</h2>
      {user && (
        <div className="text-center my-4">
          <p>Name: {user.displayName || "N/A"}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleSignOut} className="px-4 py-2 mt-4 bg-red-500 text-white rounded">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
