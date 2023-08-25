import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/FileTable.css';


function FileTable() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (uploadedFile && allowedFileTypes.includes(uploadedFile.type)) {
      setUploadedFiles([...uploadedFiles, uploadedFile]);
    } else {
      alert('Please upload a valid PDF, XLSM, or DOCX file.');
    }
  };

  return (
    <div className="file-table-container">
      <input type="file" accept=".pdf,.xlsm,.docx, .xlsx" onChange={handleFileUpload} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>File Name</th>
            <th>File Type</th>
            <th>Size</th>
            <th>Date Modified</th>
          </tr>
        </thead>
        <tbody>
        {uploadedFiles.map((file, index) => {
            const fileNameParts = file.name.split('.');
            const fileType = fileNameParts.length > 1 ? capitalizeFirstLetter(fileNameParts.pop()).toUpperCase() : 'Unknown';
            
            return (
                <tr key={index}>
                <td>
                    <a href={URL.createObjectURL(file)} download={file.name}>
                        {file.name}
                    </a>
                </td>
                <td>{fileType}</td>
                <td>{(file.size / 1024).toFixed(2)} KB</td>
                <td>{file.lastModifiedDate.toLocaleDateString()}</td>
                </tr>
            );
        })}
        </tbody>
      </table>
    </div>
  );
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default FileTable;
