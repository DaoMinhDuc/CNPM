import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './store';
import Admin from "./AdminPage/Admin";
import AddBook from "./Sách/AddBook";
import LoginAdmin from "./Login/LoginAdmin";
import AddNewBook from "./Sách/AddNewBook";
import EditBook from "./Sách/EditBook";
import UserAccountAdd from "./UserAccount/UserAccountAdd";
import UserAccountEdit from "./UserAccount/UserAccountEdit";
import UserAccountList from "./UserAccount/UserAccountList";
import EmployeeAdd from "./NhanVien/EmployeeAdd";
import EmployeeEdit from "./NhanVien/EmployeeEdit";
import EmployeeList from "./NhanVien/EmployeeList";
import Borrow from "./MuonTra/Borrow";
import BorrowDetail from "./MuonTra/BorrowDetail";
import { Feature } from "./Feature";
const router = createBrowserRouter([ 
  {
    path: "/",
    element: <Feature />,
    children: [
  {
    path: "/",
    element: <Admin />,
  },
  {
    path: "/AddBook",
    element: <AddBook />,
  },
  {
    path: "/add-new-book",
    element: <AddNewBook />,
  },
  {
    path: "/edit-book/:id",
    element: <EditBook />,
  },
  {
    path: "/UserAccountList",
    element: <UserAccountList />,
  },
  {
    path: "/user-account-edit/:id",
    element: <UserAccountEdit />,
  },
  {
    path: "/user-account-add",
    element: <UserAccountAdd />,
  },
  {
    path: "/employee",
    element: <EmployeeList />,
  },
  {
    path: "/employee-edit/:id",
    element: <EmployeeEdit />,
  },
  {
    path: "/employee/add",
    element: <EmployeeAdd />,
  },
  {
    path: "/borrow",
    element: <Borrow />,
  },
  {
    path: "/borrowdetail/:id",
    element: <BorrowDetail />,
  },
],
  },
  {
    path: "/login",
    element: <LoginAdmin />,
  },
  ]);
function App() {
 
  return (
    <>
      <Provider store={store} >
    <RouterProvider router={router} />
    
  </Provider>
    </>
  )
}

export default App
