import { useNavigate} from "react-router-dom";
import { useState} from "react";
import {useDispatch, useStore} from "react-redux";
import {login} from "../userSlice";

import './LoginAdmin.css'
const LoginAdmin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useStore();

  const redirectToHomePage = () => {
    if (username && password) {
      dispatch(login({ username, password }));
      navigate(`/`);
    } else {
      alert('Vui lòng nhập username hoặc password');
    }
  };

  return (
    <>
    
   
  <div className="Login-form">
    <h3>Đăng nhập tài khoản của bạn</h3>
    <input className="input-field" placeholder="Tài Khoản" onChange={(e) => setUsername(e.target.value)}/>
  
    <input className="input-field" placeholder="Mật Khẩu" onChange={(e) => setPassword(e.target.value)} />
    <br/>
    <button className="login-button"  onClick={redirectToHomePage}>Đăng nhập</button>
  </div>

  </>
)}

export default LoginAdmin