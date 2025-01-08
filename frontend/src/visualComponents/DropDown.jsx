import React, { useContext, useState } from 'react';
import { DatasetContext } from '../Context/DatasetContext';

export default function Dropdown({ stores }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [uploadStatus, setUploadStatus] = useState(''); 
  const [excelData, setExcelData] = useState(null); 
  const { dataframe } = useContext(DatasetContext);

  const fetchChangedData = async () => {
    if (!selectedValue) return;

    try {
      const response = await fetch('http://127.0.0.1:5000/specific_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ store_type: selectedValue, dataframe }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Data processed successfully:', result);
        setUploadStatus('File processed and uploaded successfully!');
        setExcelData(result.data);
        console.log(result.data); 
      } else {
        console.error('Error processing data:', result);
        setUploadStatus('Error processing file.');
      }
    } catch (error) {
      console.error('Error:', error);
      setUploadStatus('An error occurred while fetching data.');
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    fetchChangedData();
  };

  return (
    <div
      style={{
        marginLeft: '20px',
        border: '1px solid white',
        borderRadius: '12px',
        width: '240px',
        padding: '12px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'rgba(245, 245, 245, 0.306)',
        textAlign: 'center',
      }}
    >
      <label
        htmlFor="dropdown"
        style={{ color: 'white', fontWeight: 'bold', marginBottom: '8px' }}
      >
        Choose an option:
      </label>
      <select
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
        style={{
          marginTop: '12px',
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        <option value="" disabled>
          Select an option
        </option>
        {stores &&
          stores.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
      </select>
      {uploadStatus && <p style={{ color: 'red', marginTop: '10px' }}>{uploadStatus}</p>}
    </div>
  );
}
