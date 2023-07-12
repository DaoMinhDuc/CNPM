import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Table.css';

interface Employee {
  id: number;
  name: string;
  age: number;
  position: string;
  username: string;
  password: string;
}

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://647a1920a455e257fa644fb2.mockapi.io/employee')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const deleteEmployee = (id: number) => {
    axios
      .delete(`https://647a1920a455e257fa644fb2.mockapi.io/employee/${id}`)
      .then(() => {
        setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter(employee => {
    const { name, position, username } = employee;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      name.toLowerCase().includes(lowerCaseSearchTerm) ||
      position.toLowerCase().includes(lowerCaseSearchTerm) ||
      username.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <>
      <div id="List">
        <Link to="/employee/add">
          <button className="Add-new">Thêm nhân viên</button>
        </Link>
        <input className='search'
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
              <th>Chức vụ</th>
              <th>Tên đăng nhập</th>
              <th>Mật khẩu</th>
              <th>Sửa thông tin</th>
              <th>Xóa thông tin</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(employee => (
              <tr key={employee.id}>
                 <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.position}</td>
                <td>{employee.username}</td>
                <td>{employee.password}</td>
                <td>
                  <Link to={`/employee-edit/${employee.id}`}>
                    <button className="button-action">Sửa thông tin</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteEmployee(employee.id)} className="button-action">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
