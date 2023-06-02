import {Link, useNavigate} from "react-router-dom";
import { useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "./userSlice";
import Header from "./Header";
import './Login.css'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();


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
     <Header />
   
  <div className="Login-form">
    Username:
    <input className="input-field" onChange={(e) => setUsername(e.target.value)}/>
    Password:
    <input className="input-field" onChange={(e) => setPassword(e.target.value)} />
    <br/>
    <button  onClick={redirectToHomePage}>Đăng nhập</button>
    <p>Chưa có tài khoản <Link  to="/sign-up">đăng kí</Link></p>
  </div>

  </>
)}

export default Login