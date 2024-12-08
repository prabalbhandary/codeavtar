import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaPlus } from "react-icons/fa";

const IntermediateDesignPage = () => {
  const [certificationFile, setCertificationFile] = useState(null);
  const [companyLogoFile, setCompanyLogoFile] = useState(null);
  const navigate = useNavigate();

  const handleCertificationFileChange = (e) => {
    setCertificationFile(e.target.files[0]);
  };

  const handleCompanyLogoFileChange = (e) => {
    setCompanyLogoFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDropCertification = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    setCertificationFile(file);
  };

  const handleDropLogo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    setCompanyLogoFile(file);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <div className="text-center mb-8">
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="Logo"
            className="mx-auto mb-4 w-28 cursor-pointer"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8 md:mb-12">
          Multi-Step Process Form Assignment
        </h1>

        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-500 h-[14px] w-[1064.5 px] rounded-full"
              style={{ width: "14%" }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-center text-gray-500 font-medium">
            <p>Business Type</p>
            <p>Business Details</p>
            <p>Authorized Representative</p>
            <p>Business Owners</p>
            <p>Company Directors</p>
            <p>Support Information</p>
            <p>Bank Details</p>
            <p>Complete Registration</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Tell us more about your business
          </h2>
          <p className="text-lg text-gray-600">
            Your info is like the Wi-Fi password—totally crucial for keeping
            things running, impressing the money folks, and making sure you get
            top-notch service without any buffering!
          </p>
        </div>

        <form>
          <div className="flex flex-wrap gap-8">
            {/* Left Section */}
            <div className="w-1/2 md:w-full">
              <div className="mb-6">
                <label
                  htmlFor="companyName"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Legal Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                  placeholder="Legal Name"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="doingBusinessAs"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Doing Business as <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="doingBusinessAs"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                  placeholder="Doing Business as"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="companyRegistrationNo"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Company Registration Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyRegistrationNo"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                  placeholder="Company Registration Number"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="websiteURL"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Website URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="websiteURL"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                  placeholder="Website URL"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="industryName"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Industry Name <span className="text-red-500">*</span>
                </label>
                <select
                  name="industryName"
                  id="industryName"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                >
                  <option value="">Industry Name</option>
                  <option value="IT">IT</option>
                  <option value="Finance">Finance</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Construction">Construction</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                </select>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-1/2 md:w-full">
              <div className="mb-6">
                <label
                  htmlFor="randomRegistrationNo"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Random Registration Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="randomRegistrationNo"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                  placeholder="Random Registration Number"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="randomoptions"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  One Random Dropdown? <span className="text-red-500">*</span>
                </label>
                <select
                  name="randomoptions"
                  id="randomoptions"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                >
                  <option value="">Options nai options</option>
                  <option value="IT">IT</option>
                  <option value="Finance">Finance</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="dropdown"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Which Dropdown would you like to select?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="dropdown"
                  id="dropdown"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                >
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="dropdown"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Another Random Dropdown Appears{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="dropdown"
                  id="dropdown"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                >
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div>
                <h2 className="font-semibold text-lg mb-4">
                  Certification Upload
                </h2>
                <div
                  className="mb-6 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDropCertification}
                >
                  <label
                    htmlFor="certificationFile"
                    className="flex flex-col items-center justify-center cursor-pointer"
                  >
                    {certificationFile ? (
                      <p>{certificationFile.name}</p>
                    ) : (
                      <>
                        <FaPlus size={40} className="text-gray-600" />
                        <p className="text-xl text-gray-600">
                          Drag & Drop your files here
                        </p>
                      </>
                    )}
                    <input
                      type="file"
                      id="certificationFile"
                      accept="image/*, .pdf, .doc, .docx, .xls, .xlsx"
                      onChange={handleCertificationFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-lg mb-4">
                  Company Logo Upload
                </h2>
                <div
                  className="mb-6 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDropLogo}
                >
                  <label
                    htmlFor="companyLogoFile"
                    className="flex flex-col items-center justify-center cursor-pointer"
                  >
                    {companyLogoFile ? (
                      <p>{companyLogoFile.name}</p>
                    ) : (
                      <>
                        <FaPlus size={40} className="text-gray-600" />
                        <p className="text-xl text-gray-600">
                          Drag & Drop your files here
                        </p>
                      </>
                    )}
                    <input
                      type="file"
                      id="companyLogoFile"
                      accept="image/*"
                      onChange={handleCompanyLogoFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="w-40 py-4 px-2 bg-gray-100 hover:bg-gray-300 rounded-lg text-black">
              Previous
            </button>
            <button className="w-40 py-4 px-2 bg-red-600 hover:bg-red-700 rounded-lg text-white">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IntermediateDesignPage;
