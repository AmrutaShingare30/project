import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import PageHeader from "../components/PageHeader";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      title: "Enter URL",
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });

    if (url) {
      Swal.fire(`Entered URL: ${url}`);

      // Display the second Swal.fire() block only when a valid URL is entered
      Swal.fire({
        title:
          "Form submitted successfully! Check your email for further instructions.",
        width: 600,
        padding: "3em",
        color: "green",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,123,0,0.4)
          center
          no-repeat
        `,
      });
    } else {
      Swal.fire({
        title: "No URL Entered",
        text: "You did not enter a URL. Please try again.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Single Job Page"} path={"single job"} />
      <h2>JobDetails: {id}</h2>
      <h1>{job.jobTitle}</h1>
      <button className="bg-green px-8 py-2 text-white" onClick={handleApply}>
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
