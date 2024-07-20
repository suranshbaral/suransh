// ResumeButton.jsx
import React from 'react';

const ResumeButton = () => {
  const viewResume = () => {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume PDF
    const resumePath = 'https://drive.google.com/file/d/1Ak1y5XgQaxpCFi4y1fh4313l_-KwM3E4/view?usp=sharing';

    // Open the resume in a new tab/window
    window.open(resumePath, '_blank');
  };

  return (
    <div className="resume-dropdown">
      {/* Call viewResume directly without showing the dropdown */}
      <button onClick={viewResume} style={{
        color: '#ffffff', // Change the color as needed
        fontSize: '18px', // Change the font size as needed
        fontWeight: 500
        // Add any other styles you want
      }}>
        Resume
      </button>
    </div>
  );
};

export default ResumeButton;



