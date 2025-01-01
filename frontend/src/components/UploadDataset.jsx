import React, { useState } from 'react';
import './UploadDataset.css'; // Optional: Add styles in a separate file

export default function UploadDataset() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus('');
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    // Simulate upload process
    setTimeout(() => {
      setUploadStatus(`File "${selectedFile.name}" uploaded successfully!`);
      setSelectedFile(null);
    }, 1500);
  };

  return (
    <div className="upload-dataset-container">
      <h2>Upload Dataset</h2>
      <div className="upload-area">
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
        />
        <button onClick={handleUpload} className="upload-button">
          Upload
        </button>
      </div>
      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
    </div>
  );
}
