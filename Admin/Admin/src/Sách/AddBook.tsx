import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import '../formAdd.css'

interface AddBook {
  attributes: any;
  
  id :number
name : string
description: string
price: number
avatar: string
}
function AddBook() {
  const [listProfile, setListProfile] = useState<AddBook[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://6469ffaa03bb12ac20975da5.mockapi.io/book')
      .then(res => setListProfile(res.data))
      .catch(err => console.log(err));
  }, []);
//   useEffect(() => {
//     axios
//     .get('http://localhost:1337/api/books')
//     .then(res => {
//       const data = Array.isArray(res.data.data) ? res.data.data : [];
//       setListProfile(data);
      
//     })
//     .catch(err => console.log(err));
// }, []);

  function deleteProfile(id: number) {
    axios
      .delete(`https://6469ffaa03bb12ac20975da5.mockapi.io/book/${id}`)
      .then(() => {
        setListProfile(listProfile.filter(profile => profile.id !== id));
      })
      .catch(err => console.log(err));
  }

 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredListProfile = listProfile.filter((item) => {
    const { name, description, price} = item;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      name.toLowerCase().includes(lowerCaseSearchTerm) ||
      description.toLowerCase().includes(lowerCaseSearchTerm) ||
      price.toString().toLowerCase().includes(lowerCaseSearchTerm)
    )
  });

  return (
    <>
    
      <div id="List">
   
          <Link to="/add-new-book">
            <button className="Add-new">Thêm  mới</button>
          </Link>
    
        <input  className='search'
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <table>
          <tr>
            <th>id</th>
            <th>tên sách</th>
            <th>chú thích</th>
            <th>giá</th>
            <th>Ảnh bìa sách</th>
            <th>Sửa thông tin</th>
            <th>Xóa thông tin</th>
          </tr>
          <tbody>
            {filteredListProfile.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.avatar}</td>
                <td>
                  <Link to={`/edit-book/${item.id}`}>
                    <button className="button-action">Sửa thông tin</button>
                  </Link>
                </td>
                <td>
                  <button className="button-action" onClick={() => deleteProfile(item.id)}>
                    Xóa sách
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

export default AddBook;
