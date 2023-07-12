import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../Table.css';

interface BorrowItem {
  id: string;
  username: string;
  address: string;
  phone: string;
}

const Borrow: React.FC = () => {
  const [borrowItems, setBorrowItems] = useState<BorrowItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://64731641d784bccb4a3c4073.mockapi.io/themuon/themuon')
      .then((res) => setBorrowItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (itemId: string) => {
    axios
      .delete(`https://64731641d784bccb4a3c4073.mockapi.io/themuon/themuon/${itemId}`)
      .then(() => {
        console.log('Item removed:', itemId);
        const updatedItems = borrowItems.filter((item) => item.id !== itemId);
        setBorrowItems(updatedItems);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = borrowItems.filter((item) => {
    return (
      item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <div style={{ marginLeft: '300px' }}>
        <h2>Danh sách mượn</h2>
        <input style={{margin:'70px 0px 0px 300px' , padding: '10px'}}
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <table>
          <thead>
            <tr>
              <th>Tên người dùng</th>
              <th>Địa chỉ</th>
              <th>Số Điện thoại</th>
              <th>Chi tiết</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>

                <td>
                  <Link to={`/borrowdetail/${item.id}`}>Xem chi tiết</Link>
                </td>
                <td>
                  <button className="button-action" onClick={() => handleDelete(item.id)}>
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
};

export default Borrow;
