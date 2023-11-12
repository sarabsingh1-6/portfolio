import React from "react";

const ResumeDownloadButton = () => {
  const downloadResume = () => {
    window.open("../public/sarabjeet_CV.pdf", "_blank");
  };

  return (
    <button onClick={downloadResume}>Download Resume</button>
  );
};

export default ResumeDownloadButton;