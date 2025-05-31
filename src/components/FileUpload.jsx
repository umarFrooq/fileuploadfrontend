// import React from 'react';
// import styles from '../styles/FileUpload.module.css';
// import Vector from '../assets/Vector.png'
// function FileUpload() {
//   return (
//     <div className="container my-5">
//       <div className={`${styles.uploadContainer} text-center`}>
//         <div className={styles.uploadIcon}><img src={Vector} alt="" /></div>
//         <div className={styles.uploadText}>
//           Upload your file and share with people
//         </div>
//         <button className={`${styles.uploadButton} btn btn-dark py-3` }>+ Upload File</button>
//       </div>
//     </div>
//   );
// }

// export default FileUpload;






// import React, { useRef, useState } from 'react';
// import styles from '../styles/FileUpload.module.css';
// import Vector from '../assets/Vector.png';

// function FileUpload() {
//   const fileInputRef = useRef(null);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [fileName, setFileName] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const handleFileClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFileName(file.name);
//       simulateUpload();
//     }
//   };

//   const simulateUpload = () => {
//     setUploading(true);
//     setProgress(0);
//     let progressValue = 0;
//     const interval = setInterval(() => {
//       progressValue += 5;
//       if (progressValue >= 100) {
//         clearInterval(interval);
//         setProgress(100);
//         setUploading(false);
//         setShowModal(true);
//       } else {
//         setProgress(progressValue);
//       }
//     }, 100); // 100ms per increment
//   };

//   return (
//     <div className="container my-5">
//       <div className={`${styles.uploadContainer} text-center`}>
//         <div className={styles.uploadIcon}>
//           <img src={Vector} alt="Upload icon" />
//         </div>
//         <div className={styles.uploadText}>
//           Upload your file and share with people
//         </div>

//         <input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleFileChange}
//           className="d-none"
//         />
//         <button
//           className={`${styles.uploadButton} btn btn-dark py-3`}
//           onClick={handleFileClick}
//         >
//           + Upload File
//         </button>

//         {/* Progress Circle */}
//         {uploading && (
//           <div className="mt-4">
//             <div
//               className="progress-circle"
//               style={{
//                 width: '100px',
//                 height: '100px',
//                 borderRadius: '50%',
//                 border: '10px solid #ccc',
//                 borderTop: '10px solid #000',
//                 animation: 'spin 1s linear infinite',
//                 margin: '0 auto',
//               }}
//             ></div>
//             <div className="mt-2 fw-bold">{progress}%</div>
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div
//           className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
//           style={{ zIndex: 1050 }}
//         >
//           <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
//             <h5 className="mb-3">Upload Complete</h5>
//             <p className="text-muted">File: {fileName}</p>
//             <div className="d-flex justify-content-between mt-4">
//               <button className="btn btn-outline-primary w-50 me-2">Share</button>
//               <button
//                 className="btn btn-success w-50"
//                 onClick={() => setShowModal(false)}
//               >
//                 Done
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CSS for spinner animation */}
//       <style>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default FileUpload;
















import React, { useRef, useState } from 'react';
import styles from '../styles/FileUpload.module.css';
import Vector from '../assets/Vector.png';
import progressbar from '../assets/progress.png'
import editfile from '../assets/editfile.png'
import Share from '../assets/Share.png'
import Trash from '../assets/Trash.png'
import Manage from '../assets/Manage.png'
function FileUpload({ onDone }) {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(`${file.name} (${Math.round(file.size / 1024)} KB)`);
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    setUploading(true);
    setProgress(0);
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 5;
      if (progressValue >= 100) {
        clearInterval(interval);
        setProgress(100);
        setUploading(false);
        setTimeout(() => setShowModal(true), 500);
      } else {
        setProgress(progressValue);
      }
    }, 100);
  };

  return (
    <div className="container my-1">
      <div className={`${styles.uploadContainer} text-center`}>
        {/* <div className={styles.uploadIcon}>
          <img src={Vector} alt="Upload icon" />
        </div>
        <div className={styles.uploadText}>
          Upload your file and share with people
        </div> */}

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="d-none"
        />
        <button
          className={`${styles.uploadButton}  `}
          onClick={handleFileClick}
        >
          + Upload File
        </button>
      </div>

      {uploading && (
        <div className="modal-backdrop">
          <div className="modal-box text-center">
            <h5 className="fw-bold mb-3">Uploading File</h5>
            <div className="progress-circle-container">
              <svg className="progress-ring" width="100" height="100">
                <circle
                  className="progress-ring__circle"
                  stroke="#ccc"
                  strokeWidth="10"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="progress-ring__circle--active"
                  stroke="#0d6efd"
                  strokeWidth="10"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                  strokeDasharray={251.2}
                  strokeDashoffset={251.2 - (251.2 * progress) / 100}
                />
              </svg>
              <p className="mt-3 fw-semibold">Uploading...</p>
            </div>
            <button className="close-btn" onClick={() => setUploading(false)}>×</button>
          </div>
        </div>
      )}


      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-box text-center fs-5 ">
            <h1 className="fw-bold mb-5 py-5 ">Uploaded File</h1>
            <div className="circle-icon mb-5  w-50 bg-dark">
              <img className='w-100' src={progressbar} alt="uploaded" />
            </div>
            <h4 className="fw-semibold pt-5">{fileName}</h4>
            <p> file size : 20 MB</p>
            {/* <div className="icon-actions  d-flex justify-content-center gap-3">
              <i className="bi bi-trash"></i>
              <i className="bi bi-link"></i>
              <i className="bi bi-share"></i>
            </div> */}
            <div className='d-flex justify-content-center align-items-center gap-3 py-2 mb-3'>
              <div>
                <img src={editfile} alt="" />
              </div>
              <div>
                <img src={Trash} alt="" />
              </div>
              <div>
                <img src={Manage} alt="" />
              </div>
              <div>
                <img src={Share} alt="" />
              </div>
            </div>
 <button
              className="btn btn-primary w-100 mt-3 py-4 mb-3"
              onClick={() => {
                setShowModal(false);
                onDone(); // 👈 Switch to Dashboard
              }}
            >
              Done
            </button>  
<button className="close-btn" onClick={() => setShowModal(false)}>×</button>          </div>
        </div>
      )}

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex; align-items: center; justify-content: center;
          z-index: 1050;
        }
        .modal-box {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          width: 100%;
          max-width: 360px;
        }
        .close-btn {
          position: absolute;
          top: 12px;
          right: 16px;
          background: transparent;
          border: none;
          font-size: 24px;
        }
        .progress-circle-container {
          position: relative;
        }
        .progress-ring {
          transform: rotate(-90deg);
        }
        .progress-ring__circle,
        .progress-ring__circle--active {
          transition: stroke-dashoffset 0.35s;
          transform: rotate(0deg);
          transform-origin: 50% 50%;
        }
        .circle-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #eaf1ff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }
        .icon-actions i {
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default FileUpload;
