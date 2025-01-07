import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './UploadDataset.css';

export default function UploadDataset() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [excelData, setExcelData] = useState(null);

  const preprocessData = async (jsonData) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/preprocess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dataframe: jsonData }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Data processed successfully:', result);
        setUploadStatus('File processed and uploaded successfully!');
        console.log(result.data); 
      } else {
        console.error('Error processing data:', result);
        setUploadStatus('Error processing file.');
      }
    } catch (error) {
      console.error('Error encountered:', error);
      setUploadStatus('Error encountered while uploading file.');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadStatus('');

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const binaryData = e.target.result;
        const workbook = XLSX.read(binaryData, { type: 'binary' });

        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        
        console.log(jsonData);
        setExcelData(jsonData);
        preprocessData(jsonData);
      };

      reader.onerror = (e) => {
        console.error('Error reading file:', e.target.error);
        setUploadStatus('Error reading the file.');
      };

      reader.readAsBinaryString(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

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
