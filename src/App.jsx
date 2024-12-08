import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import IntermediateDesignPage from "./components/IntermediateDesignPage";
import OTPVerificationPage from "./components/OTPVerificationPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route
          path="/intermediate-design"
          element={<IntermediateDesignPage />}
        />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
