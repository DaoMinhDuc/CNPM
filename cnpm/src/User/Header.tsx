// import { useEffect, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import "./Header.css";
import { Link } from 'react-router-dom';
// import { getProfiles } from './userSlice';
import { useSelector} from "react-redux";
import {RootState} from "../store";

function Header() {
    const user = useSelector((store: RootState) => store.user);
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //   dispatch(getProfiles());
    // }, [dispatch]);
  
    return(
      <div>
      <div className="header">
      
        <div className="logo">
        <Link to="/"><img src="" alt="logo" /></Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Tìm kiếm ..." />
          <img src="" alt="search" />
        </div>
        <Link to="/cart">
          <img src="" alt="giỏ hàng" />
        </Link>
        <div className="sign-up">
          {user?.username ? (
            <span>{user.username}</span>
          ) : (
            <>
              <Link  to="/login">
              <button className="sign-in">sign-in</button>
              </Link>
            </>
          )}
        </div>
        <br />
      </div>
    </div>
  );
}

export default Header;