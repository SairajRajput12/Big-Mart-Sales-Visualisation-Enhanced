import React, { useState } from 'react';

export default function Dropdown() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={{ marginLeft:'20px',border:'1px solid white',borderRadius:'12px',width:'200px',alignContent:'center',padding:'12px',fontFamily: 'Arial, sans-serif' ,backgroundColor:'rgba(245, 245, 245, 0.306)',justifyContent:'center'}}>
      <label htmlFor="dropdown" style={{ color:'white',fontWeight: 'bold',marginLeft:'30px', marginRight: '8px',marginTop:'24px' }}>
        Choose an option:
      </label>
      <br />
      <select
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
        style={{
          marginTop:'12px',
          marginLeft:'30px',
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
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}
