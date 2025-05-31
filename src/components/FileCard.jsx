// import React from 'react';
// import styles from '../styles/FileCard.module.css';
// import fileimg from '../assets/file.png'
// function FileCard({ file, view }) {
//   return (
//     <div className={`card p-3 shadow-sm ${view === 'list' ? styles.listCard : ''}`}>
//       <div className="w-25 justify-content-center text-center d-flex flex-column">
//         <div className=''>
//           <span className="badge "><img src={fileimg} alt="" /></span>
//           <h6 className="mb-1">{file.name}</h6>
//           <small>{file.daysLeft} Days Left</small>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default FileCard;


import React from 'react';
import styles from '../styles/FileCard.module.css';
import fileimg from '../assets/file.png';

function FileCard({ file, view }) {
  return (
    <div className={`card p-3 shadow-sm d-flex ${view === 'list' ? styles.listCard : styles.gridCard}`}>
      <div className={`d-flex ${view === 'list' ? 'align-items-center' : 'flex-column text-center'}`}>
        <img src={fileimg} alt="file" className={styles.fileIcon} />
        <div className={view === 'list' ? 'ms-3' : 'mt-2'}>
          <h6 className="mb-1 fw-semibold">{file.name}</h6>
          <small className="text-muted">{file.daysLeft} Days Left</small>
        </div>
      </div>
    </div>
  );
}

export default FileCard;

