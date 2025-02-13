import React from "react";
import { usePDF } from "react-to-pdf";
import "./App.css";

const App: React.FC = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "form-data.pdf",
    overrides: {
      canvas: {
        scale: 3, // Correct way to increase resolution
        useCORS: true,
      },
    },
  });

  return (
    <div className="container">
      <div ref={targetRef} className="form-container pdf-styles">
        <h2 className="form-title">User Form</h2>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-input pdf-input"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            className="form-input pdf-input"
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea
            className="form-input"
            placeholder="Enter Address"
          ></textarea>
        </div>
      </div>

      <button onClick={() => toPDF()} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default App;
