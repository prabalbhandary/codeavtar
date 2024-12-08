import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import LeftImg from "../assets/1.png";

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(99);
  const navigate = useNavigate();

  const otpRefs = useRef([]);
  otpRefs.current = Array(6)
    .fill()
    .map((_, i) => otpRefs.current[i] ?? React.createRef());

  const handleOTPChange = (e, index) => {
    const newOtp = otp.split("");
    newOtp[index] = e.target.value;
    setOtp(newOtp.join(""));

    if (e.target.value && index < 5) {
      otpRefs.current[index + 1].current.focus();
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      navigate("/intermediate-design");
    }
  };

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secondsLeft).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <img
          src={LeftImg}
          alt="Left Image"
          className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 md:p-10 rounded-b-xl md:rounded-r-xl shadow-xl">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img
              onClick={() => navigate("/")}
              src={Logo}
              alt="Logo"
              className="mx-auto mb-4 w-28 cursor-pointer"
            />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Verify Your Email
            </h2>
            <p className="text-gray-700 text-lg">
              Please enter the 6-digit code we just sent to s*********a@xyz.com
            </p>
          </div>
          <div className="flex justify-center mb-6 space-x-2">
            {[...Array(6)].map((_, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={otp[index] || ""}
                  onChange={(e) => handleOTPChange(e, index)}
                  className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  maxLength="1"
                  placeholder="-"
                  required
                  ref={otpRefs.current[index]}
                />
                {index === 2 && (
                  <span className="text-xl font-semibold text-gray-700">-</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-4">
            Didn't receive a code?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Resend Code
            </a>
          </p>
          <button
            onClick={verifyOTP}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300 text-lg font-medium"
          >
            Verify OTP
          </button>

          {timeLeft > 0 && (
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Wait {formatTime(timeLeft)} before requesting a new code.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
