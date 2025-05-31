// import React, { useState } from 'react';
// import styles from '../styles/Dashboard.module.css';
// import FileCard from './FileCard';
// import listView from '../assets/listView.png'
// import gridView from '../assets/gridView.png'
// import Vector from '../assets/Vector.png';
// function Dashboard() {
//   const [view, setView] = useState('grid');
//   const [files, setFiles] = useState([
//     // { id: 1, name: 'Document.pdf', daysLeft: 25 },
//     // { id: 2, name: 'Report.docx', daysLeft: 15 },
//     // { id: 3, name: 'Image.png', daysLeft: 7 },
//   ]);

//   return (
//     <div className="container-fluid py-1">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h4> your files</h4>
//         <div>
//           <button className="btn btn-sm btn-outline-secondary border-0 p-0 m-0" onClick={() => setView('list')}>
//            <img src={listView} alt="" />
//           </button>
//           <button className="btn btn-sm btn-outline-secondary border-0 p-0 m-0" onClick={() => setView('grid')}>
//             <img src={gridView} alt="" />
//           </button>
//         </div>
//       </div>

//       {/* <div className="mb-4">
//         <input
//           type="file"
//           onChange={(e) =>
//             setFiles([...files, { id: Date.now(), name: e.target.files[0].name, daysLeft: 30 }])
//           }
//         />
//       </div> */}

//    <div className={view === 'grid' ? styles.grid : styles.list}>
//   {files.length === 0 ? (
//     <div className="text-center  p-5 my-5 rounded">
//       <div className=' py-5 my-5'>
//       <div className={`${styles.uploadIcon}  py-3 `}>
//         <img src={Vector} alt="Upload icon" />
//       </div>
//       <div className={styles.uploadText}>
//         <h4> Upload your file and share with people </h4>
//       </div>
//       </div>
//     </div>
//   ) : (
//     files.map((file) => (
//       <FileCard key={file.id} file={file} view={view} />
//     ))
//   )}
// </div>

//     </div>
//   );
// }

// export default Dashboard;


import React, { useState } from 'react';
import styles from '../styles/Dashboard.module.css';
import FileCard from './FileCard';
import listView from '../assets/listView.png';
import gridView from '../assets/gridView.png';
import Vector from '../assets/Vector.png';

function Dashboard() {
  const [view, setView] = useState('grid');
  const [files, setFiles] = useState([
    { id: 1, name: 'Document.pdf', daysLeft: 25 },
    { id: 2, name: 'Report.docx', daysLeft: 15 },
    { id: 3, name: 'Image.png', daysLeft: 7 },
  ]);

  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Your Files</h4>
        <div>
          <button
            className="btn btn-sm btn-light border-0 p-0 m-0"
            onClick={() => setView('list')}
          >
            <img src={listView} alt="List View"  width={40} />
          </button>
          <button
            className="btn btn-sm btn-light border-0 p-0"
            onClick={() => setView('grid')}
          >
            <img src={gridView} alt="Grid View" width={40} />
          </button>
        </div>
      </div>

      <div className={view === 'grid' ? styles.grid : styles.list}>
        {files.length === 0 ? (
          <div className="text-center p-5 my-5 rounded">
            <div className="py-5 my-5">
              <div className={`${styles.uploadIcon} py-3`}>
                <img src={Vector} alt="Upload icon" />
              </div>
              <div className={styles.uploadText}>
                <h4>Upload your file and share with people</h4>
              </div>
            </div>
          </div>
        ) : (
          files.map((file) => <FileCard key={file.id} file={file} view={view} />)
        )}
      </div>
    </div>
  );
}

export default Dashboard;
