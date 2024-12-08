import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftImg from "../assets/1.png";
import Logo from "../assets/logo.png";

const SignupPage = () => {
  const [phoneEmail, setPhoneEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setPhoneEmail(e.target.value);
    setError("");
  };

  const validateInput = (input) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (emailRegex.test(input)) {
      return "email";
    } else if (phoneRegex.test(input)) {
      return "phone";
    } else {
      return "invalid";
    }
  };

  const sendOTP = (e) => {
    e.preventDefault();
    const validation = validateInput(phoneEmail);

    if (validation === "invalid") {
      setError("Please enter a valid email address or phone number.");
    } else {
      navigate("/otp-verification");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <img
          src={LeftImg}
          alt="Left Image"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 md:p-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img
              onClick={() => navigate("/")}
              src={Logo}
              alt="Logo"
              className="mx-auto mb-4 w-28 cursor-pointer"
            />
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Sign Up
            </h2>
            <p className="text-gray-700 text-lg">
              Please enter your email address or phone number to continue.
            </p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="phoneEmail"
              className="block text-xl font-semibold text-gray-700 mb-2"
            >
              Phone or Email
            </label>
            <input
              type="text"
              id="phoneEmail"
              value={phoneEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              placeholder="Enter Your Phone Number or Email"
              required
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button
            onClick={sendOTP}
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300 text-lg font-medium"
          >
            Send OTP
          </button>
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              By continuing, you’re agreeing to Nobody’s{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>
              ,{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
