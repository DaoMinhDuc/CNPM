import { useState, useEffect } from 'react';
import axios from 'axios';
import Admin from '../AdminPage/Admin';
import { Link } from 'react-router-dom';
import '../Table.css';

interface UserAccount {
  id: string
  name: string
  age: number
  gender: string
  address: string
  username: string
  password: string
}
function UserAccountList() {
  const [userAccounts, setUserAccounts] = useState<UserAccount[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://6477745a9233e82dd53bb1e7.mockapi.io/UserAccount')
      .then((response) => {
        setUserAccounts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteUserAccount = (id: string) => {
    axios
      .delete(`https://6477745a9233e82dd53bb1e7.mockapi.io/UserAccount/${id}`)
      .then((response) => {
        setUserAccounts((prevUserAccounts) =>
          prevUserAccounts.filter((userAccount) => userAccount.id !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUserAccounts = userAccounts.filter((userAccount) => {
    const { name, username, address } = userAccount;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      name.toLowerCase().includes(lowerCaseSearchTerm) ||
      username.toLowerCase().includes(lowerCaseSearchTerm) ||
      address.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <>
      <div id="List">
        <Link to="/user-account-add">
          <button className="Add-new">Thêm mới</button>
        </Link>
        
        <input  className='search'
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
       
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Địa chỉ</th>
              <th>Tên đăng nhập</th>
              <th>Mật khẩu</th>
              <th>Sửa thông tin</th>
              <th>Xóa thông tin</th>
            </tr>
          </thead>
          <tbody>
            {filteredUserAccounts.map((userAccount, index) => (
              <tr key={index}>
                <td>{userAccount.id}</td>
                <td>{userAccount.name}</td>
                <td>{userAccount.age}</td>
                <td>{userAccount.gender}</td>
                <td>{userAccount.address}</td>
                <td>{userAccount.username}</td>
                <td>{userAccount.password}</td>
                <td>
                  <Link to={`/user-account-edit/${userAccount.id}`}>
                    <button className="button-action">Sửa</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="button-action"
                    onClick={() => handleDeleteUserAccount(userAccount.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserAccountList;
