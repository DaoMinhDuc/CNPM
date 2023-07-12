import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './BorrowDetail.css'
interface BorrowItem {
  id: string;
  username: string;
  address: string;
  phone:string;
  cartItems: CartItem[];
}

interface CartItem {
  id: string;
  avatar: string;
  name: string;
  price: string;
}

interface RouteParams {
  id: string;
}

const BorrowDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [borrowItem, setBorrowItem] = useState<BorrowItem | null>(null);

  useEffect(() => {
    axios
      .get(`https://64731641d784bccb4a3c4073.mockapi.io/themuon/themuon/${id}`)
      .then((res) => setBorrowItem(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!borrowItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='BorrowDetail'>
    <div className='info-book'>
      <h2>Đơn Hàng</h2>
      <ul>
        {borrowItem.cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            <div className="cart-avatar">{cartItem.avatar}</div>
            <div className="name-cart">{cartItem.name}</div>
            <div className="cart-price">{cartItem.price}</div>
          </li>
        ))}
      </ul>
      </div>
    
      <div className='info-form'>
      <h2>Thông tin đơn hàng</h2>
      <p>Tên người dùng: {borrowItem.username}</p>
      <p>Địa chỉ: {borrowItem.address}</p>
      <p>Số Điện Thoại: {borrowItem.phone}</p>
      </div>
      
    </div>
    </>
  );
};

export default BorrowDetail;
