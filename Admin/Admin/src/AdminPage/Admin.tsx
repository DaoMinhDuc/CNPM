import { Link } from "react-router-dom"
import "./Admin.css"
import AdminHeader from "./AdminHeader"

function Admin() {
    return(
        <>
         <AdminHeader />
        <div className="tab">
               <Link  to="/AddBook" style={{ textDecoration: 'none' }}><button className="tablinks">Quản lý trang chủ</button></Link>
               <Link  to="/UserAccountList" style={{ textDecoration: 'none' }}><button className="tablinks">Quản lý người dùng</button></Link>
               <Link  to="/Employee" style={{ textDecoration: 'none' }}><button className="tablinks">Quản lý nhân viên</button></Link>
                {/* <Link  to="/Admin-sign-up" style={{ textDecoration: 'none' }}><button className="tablinks">Quản lý kho sách</button></Link> */}
                <Link  to="/borrow" style={{ textDecoration: 'none' }}><button className="tablinks">Quản lý mượn trả</button></Link>
        </div>
        </>
    )
}
export default Admin