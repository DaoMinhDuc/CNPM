import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getProfiles } from '../userSlice';
import {useDispatch, useSelector} from "react-redux";
import { RootState } from '../store';
import './AdminHeader.css'
import {Avatar} from '@mui/material';

function AdminHeader() {
    const user = useSelector((store: RootState) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (user?.username === '') {
          navigate('/login')
        }
      }, [user?.username])
      
      useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(getProfiles());
      }, [dispatch]);
     
      const handleReloadPage = () => {
        window.location.reload();
      };
    
      return(
      <div>
      <div className="header">
      
        <div className="logo">
        <Link to="/"><h3>Libary Manager</h3></Link>
        </div>
        
        <div className="sign-up">
          {user?.username ? (
            <>
            <div className="dropdown">
            <Avatar src="/broken-image.jpg" />
                <p>{user.username}</p>
  <div className="dropdown-content">
  <button onClick={handleReloadPage}>Đăng xuất</button>
  </div>
</div>
            </>
            
          ) : (
            <>
              <Link  to="/admin-login">
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

export default AdminHeader;