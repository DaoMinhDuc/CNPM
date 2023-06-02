// import { useEffect, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { adminSlice } from './adminSlice';
// import {useDispatch, useSelector} from "react-redux";
// import { RootState } from './store';
// // import {RootState, Adminstore} from 

// function AdminHeader() {
//     const user = useSelector((store: RootState) => store.user);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
    
//     useEffect(() => {
//         if (user?.username === '') {
//           navigate('/login-admin')
//         }
//       }, [user?.username])
      
//       useEffect(() => {
//         dispatch(adminSlice());
//       }, [dispatch]);
//     return(
//       <div>
//       <div className="header">
      
//         <div className="logo">
//         <Link to="/"><img src="" alt="logo" /></Link>
//         </div>
//         <div className="search">
//           <input type="text" placeholder="Tìm kiếm ..." />
//           <img src="" alt="search" />
//         </div>
//         <div className="sign-up">
//           {user?.username ? (
//             <span>{user.username}</span>
//           ) : (
//             <>
//               <Link  to="/admin-login">
//               <button className="sign-in">sign-in</button>
//               </Link>
//             </>
//           )}
//         </div>
//         <br />
//       </div>
//     </div>
//   );
// }

// export default AdminHeader;