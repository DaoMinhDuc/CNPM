// import {Link, redirect, useNavigate} from "react-router-dom";
// import {useContext, useState} from "react";
// // import {store} from "./store";
// import {useDispatch, useStore} from "react-redux";
// import { login } from './adminSlice';
// // import AdminHeader from "./AdminHeader";

// const Login = () => {
//     const dispatch = useDispatch();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//   const store = useStore();

//   const handleLogin = () => {
//     // Gửi thông tin đăng nhập lên API để kiểm tra
//     // Sau khi xác thực thành công, gửi action login với thông tin đăng nhập
//     dispatch(login({ username, password }));
// };
//   return (
//     <>
//      {/* <AdminHeader /> */}
   
//   <div className="Login-form">
//     Username:
//     <input className="input-field" onChange={(e) => setUsername(e.target.value)}/>
//     Password:
//     <input className="input-field" onChange={(e) => setPassword(e.target.value)} />
//     <br/>
//     <button  onClick={handleLogin}>Đăng nhập</button>
//     <p>Chưa có tài khoản <Link  to="/sign-up">đăng kí</Link></p>
//   </div>

//   </>
// )}

// export default Login