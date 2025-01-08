import React,{useState,createContext} from 'react';  

export const DatasetContext = createContext(); 

export const DatasetProvider = ({ children }) => {
    const [excelData, setExcelData] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(false);
  
    return (
      <DatasetContext.Provider value={{ excelData, setExcelData, uploadStatus, setUploadStatus }}>
        {children}
      </DatasetContext.Provider>
    );
};