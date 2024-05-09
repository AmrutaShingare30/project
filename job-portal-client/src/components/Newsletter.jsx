import React, { useState, useRef } from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  const [resume, setResume] = useState(null);
  const [subscribed, setSubscribed] = useState(false); // State to manage subscription status
  const [email, setEmail] = useState(""); // State to manage email input
  const [emailError, setEmailError] = useState(""); // State to manage email validation error
  const [uploadStatus, setUploadStatus] = useState(""); // State to manage upload status

  const fileInputRef = useRef(null); // Ref for file input field

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
    setUploadStatus(""); // Reset upload status when a new file is selected
  };

  const handleResumeUpload = () => {
    if (!resume) {
      setUploadStatus("Please select a file."); // Set upload status to prompt user to select a file
      return;
    }
    // You can implement the logic to upload the resume here
    console.log("Resume selected:", resume.name);
    // Reset the file input
    setResume(null);
    setUploadStatus("Upload successful"); // Set upload status to "Upload successful"
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      setEmailError("Please enter your email.");
      return;
    }
    // Perform subscription logic here
    setSubscribed(true); // Update subscription status
    setEmailError(""); // Clear email validation error if any
  };

  const handleUploadButtonClick = () => {
    // Trigger file input click event
    fileInputRef.current.click();
  };

  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4"></p>

        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
            className="w-full block py-2 pl-3 border focus:outline-none rounded"
          />
          {emailError && <p className="text-red-500 mb-2">{emailError}</p>}
          <button
            onClick={handleSubscribe} // Call handleSubscribe function on button click
            className="w-full block py-2 pl-3 border bg-green rounded-sm text-white cursor-pointer font-semibold "
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>

      {/* 2nd part */}
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4"></p>

        <div className="w-full space-y-4">
          <input
            type="file" // Change input type to file
            ref={fileInputRef} // Attach ref to file input field
            onChange={handleResumeChange} // Handle file change
            className="hidden" // Hide the file input field
          />
          <button
            onClick={handleUploadButtonClick} // Handle upload button click
            className="w-full block py-2 pl-3 border bg-green rounded-sm text-white cursor-pointer font-semibold "
          >
            Upload your resume
          </button>
          {/* Display file name if selected */}
          {resume && <p className="text-green-500">{resume.name}</p>}
          {/* Display upload status */}
          {uploadStatus && <p className="text-red-500">{uploadStatus}</p>}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
