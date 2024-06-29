import React from 'react';
import "../css/loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p style={{ color:"white" }}>Loading...Dipti's Place</p>
    </div>
  );
};

export default Loading;