import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { sendResetPassword } from "../firebase/firebase";
const Reset = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = async () => {
    try {
      await sendResetPassword(email);
      toast.success("Password reset email sent successfully!", {
        onClose: () => navigate("/login"),
      });
    } catch (error) {
      toast.error(
        "Failed to send password reset email. Please try again.",
        error
      );
    }
  };
  return (
    <div className="flex flex-col p-8 justify-center items-center min-h-screen">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Reset Your Password
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter your email address below and we will send you a link to reset
          your password.
        </p>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email address"
          />
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
            onClick={handlePasswordReset}
          >
            Send Password Reset Email
          </button>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Didn&apos;t login yet?{" "}
          <NavLink
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </NavLink>
        </p>
        <p className="text-center text-gray-600 mt-2">
          <NavLink to="/" className="text-blue-600 font-medium hover:underline">
            Back to Home
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Reset;
