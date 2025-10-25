import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { loginWithGoogle } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const res = await loginWithGoogle(token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/notes");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Google login failed. Try again.");
    }
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-[90%] max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-indigo-600">Notes App</h1>
          <p className="text-gray-500 mb-6">Sign in with Google to manage your notes.</p>
          <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log("Login Failed")} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
