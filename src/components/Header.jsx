// // import React from 'react';
// // import styles from '../styles/Header.module.css';
// // import profile from '../assets/profile.png'
// // import Notification from '../assets/Notification.png'
// // function Header() {
// //   return (
// //     <header className={`d-flex justify-content-between  align-items-center p-3 shadow-sm ${styles.header}`}>
// //       {/* Left - Logo */}
// //       <div className="d-flex align-items-center">
// //         <div className={styles.logoCircle}></div>
// //         <span className={`ms-2 fw-bold ${styles.logoText}`}>APP LOGO</span>
// //       </div>

// //       {/* Center - Search Bar */}
// //       <div className={`flex-grow-1 mx-5 ${styles.searchWrapper}`}>
// //         <input
// //           type="text"
// //           className="form-control"
// //           placeholder="Search Here"
// //         />
// //       </div>

// //       {/* Right - Buttons */}
// //       <div className="d-flex align-items-center justify-content-center align-content-center gap-5  ">
// //         <div>
// //         <button className="btn btn-primary m-0 px-5 p-3 w-100">Sign in</button> </div>
// //         <div >  <img className={`${styles.profileCircle}`} src={Notification}  alt=" profile icon not found" /> </div>

// //         <div > <img className={`${styles.profileCircle}`} src={profile}  alt=" profile icon not found" /></div>
// //       </div>







// //     </header>
// //   );
// // }

// // export default Header;


// import React, { useState } from 'react';
// import styles from '../styles/Header.module.css';
// import profile from '../assets/profile.png';
// import Notification from '../assets/Notification.png';
// import Graphics from '../assets/Graphics.png'
// import apple from '../assets/apple.png'
// import facebook1 from '../assets/facebook1.png'
// import search from '../assets/search.png'
// import { GoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// function Header() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <header className={`d-flex justify-content-between align-items-center p-3 shadow-sm ${styles.header}`}>
//         {/* Left - Logo */}
//         <div className="d-flex align-items-center">
//           <div className={styles.logoCircle}></div>
//           <span className={`ms-2 fw-bold ${styles.logoText}`}>APP LOGO</span>
//         </div>

//         {/* Center - Search Bar */}
// <div className={`flex-grow-1 mx-5 position-relative ${styles.searchWrapper}`}>
//   <i
//     className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
//     style={{ fontSize: '2rem' }} // Same as input font-size
//   ></i>
//   <input
//     type="text"
//     className="form-control  py-3 border-1"
//     placeholder="Search Here"
//     style={{
//       fontSize: '15px',
//       boxShadow: 'none',
//       borderRadius:'7px',
//       paddingLeft:'40px'
//     }}
//   />
// </div>


//         {/* Right - Buttons */}
//         <div className="d-flex align-items-center justify-content-center gap-5">
//           <div>
//             <button
//               className="btn btn-primary px-5 p-3"
//               onClick={() => setShowModal(true)}
//             >
//               Sign in
//             </button>
//           </div>
//           <div>
//             <img className={styles.profileCircle} src={Notification} alt="Notification icon not found" />
//           </div>
//           <div>
//             <img className={styles.profileCircle} src={profile} alt="Profile icon not found" />
//           </div>
//         </div>
//       </header>

//       {/* Modal - Plain React-controlled Modal */}
//       {showModal && (
//         <div
//           className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
//           style={{ zIndex: 1050 }}
//         >
//           <div className="bg-white p-4 rounded shadow  d-flex flex-column justify-content-center align-items-center " style={{ width: '100%', maxWidth: '600px' }}>
//             <div className="d-flex    gap-5  align-items-center mb-3 w-100 justify-content-end">
//              <div> <h2 className="modal-title my-3">Sign In to Your Account </h2> </div>
//               <div><button
//                 type="button"
//                 className="btn-close text-dark "
//                style={{    marginRight: "12px",
//                     marginLeft: "120px"}}
//                 aria-label="Close"
//                 onClick={() => setShowModal(false)}
//               ></button> </div>
//             </div>
//             <div className=' my-3  row justify-content-between mb-1'>
//               <div className=' mb-5  '>
//                 <img src={Graphics} alt="" />
//               </div>
            
//             </div>
//             {/* <div className="d-flex w-100 flex-column justify-content-center align-items-center mb-3">
//               <button className="btn btn-outline-primary w-75 mb-3  py-3"
//                onClick={() => window.location.href = 'http://localhost:3000/auth/google'}
//               > <img src={search} className='px-2' alt="" /> Sign in with Google</button>
//               <button className="btn btn-outline-primary w-75 mb-3 text-white py-3 bg-primary"
//                onClick={() => window.location.href = 'http://localhost:3000/auth/facebook'}
//               > <img  className='px-2' src={facebook1} alt="" />Sign in with Facebook</button>
//               <button className="btn btn-outline-secondary w-75 mb-3 py-3 bg-dark text-white"  
              
//                onClick={() => window.location.href = 'http://localhost:3000/auth/apple'}
//               > <img  className='px-3' src={apple} alt="" />Sign in with Apple</button>
//               {/* <button className="btn btn-danger w-75 mb-3 py-3" onClick={() => setShowModal(false)}>Close</button> 
//             </div> */}
//             <div className="w-75 mb-3 d-flex justify-content-center">
//   <GoogleLogin
//     onSuccess={async (credentialResponse) => {
//       try {
//         const res = await axios.post('http://localhost:5000/users/auth/google', {
//           token: credentialResponse.credential,
//         });
//         console.log('Login Success:', res.data);
//         // You can now store the user data or token if your backend sends one
//         setShowModal(false); // Close modal on success
//       } catch (err) {
//         console.error('Google login failed:', err);
//       }
//     }}
//     onError={() => {
//       console.log('Google login failed');
//     }}
//   />
// </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Header;






// components/Header.js
import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import profile from '../assets/profile.png';
import Notification from '../assets/Notification.png';
import Graphics from '../assets/Graphics.png';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

const handleGoogleSuccess = async (credentialResponse) => {
  try {
    const res = await axios.post(
      'http://localhost:5000/auth/google', // Note: Changed from /callback to just /google
      { token: credentialResponse.credential },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      }
    );
    
    console.log('Login Success:', res.data);
    
    // Store user data and token
    localStorage.setItem('authToken', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    setUser(res.data.user);
    
    setShowModal(false);
    navigate('/dashboard');
  } catch (err) {
    console.error('Google login failed:', err);
    if (err.response) {
      console.error('Response data:', err.response.data);
      console.error('Response status:', err.response.status);
    }
    alert('Google login failed. Please try again.');
  }
};

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <>
      <header className={`d-flex justify-content-between align-items-center p-3 shadow-sm ${styles.header}`}>
        {/* Left - Logo */}
        <div className="d-flex align-items-center">
          <div className={styles.logoCircle}></div>
          <span className={`ms-2 fw-bold ${styles.logoText}`}>APP LOGO</span>
        </div>

        {/* Center - Search Bar */}
        <div className={`flex-grow-1 mx-5 position-relative ${styles.searchWrapper}`}>
          <i
            className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
            style={{ fontSize: '2rem' }}
          ></i>
          <input
            type="text"
            className="form-control py-3 border-1"
            placeholder="Search Here"
            style={{
              fontSize: '15px',
              boxShadow: 'none',
              borderRadius: '7px',
              paddingLeft: '40px'
            }}
          />
        </div>

        {/* Right - Buttons */}
        <div className="d-flex align-items-center justify-content-center gap-5">
          {user ? (
            <>
              <div>
                <img className={styles.profileCircle} src={Notification} alt="Notification" />
              </div>
              <div>
                <img 
                  className={styles.profileCircle} 
                  src={user.avatar || profile} 
                  alt="Profile" 
                  onClick={handleLogout}
                  title="Click to logout"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </>
          ) : (
            <div>
              <button
                className="btn btn-primary px-5 p-3"
                onClick={() => setShowModal(true)}
              >
                Sign in
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white p-4 rounded shadow d-flex flex-column justify-content-center align-items-center" 
            style={{ width: '100%', maxWidth: '600px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex gap-5 align-items-center mb-3 w-100 justify-content-end">
              <div><h2 className="modal-title my-3">Sign In to Your Account</h2></div>
              <div>
                <button
                  type="button"
                  className="btn-close text-dark"
                  style={{ marginRight: "12px", marginLeft: "120px" }}
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
            </div>
            <div className='my-3 row justify-content-between mb-1'>
              <div className='mb-5'>
                <img src={Graphics} alt="" />
              </div>
            </div>
            <div className="w-75 mb-3 d-flex justify-content-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => {
                  console.log('Google login failed');
                  alert('Google login failed. Please try again.');
                }}
                useOneTap // Enables Google One Tap
                theme="filled_blue" // or "outline"
                size="large"
                text="signin_with"
                shape="rectangular"
                width="300"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;