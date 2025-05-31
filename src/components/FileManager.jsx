import React, { useState } from 'react';
import FileUpload from './FileUpload';
import Dashboard from './Dashboard';
import Vector from '../assets/Vector.png';
function FileManager() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <>
      {showDashboard ? (
        <Dashboard />
      ) : (
        <FileUpload onDone={() => setShowDashboard(true)} />
      )}
    </>
  );
}

export default FileManager;
