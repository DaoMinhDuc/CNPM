import  { useState, useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cart.css'
function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://64731641d784bccb4a3c4073.mockapi.io/themuon/themuon')
      .then(res => setCartItems(res.data))
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);
  

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += parseFloat(item.price);
    }
    setTotalPrice(total);
  };

  const removeItem = (itemId: string) => {
    axios.delete(`https://64731641d784bccb4a3c4073.mockapi.io/themuon/themuon/${itemId}`)
      .then(() => {
        console.log("Item removed:", itemId);
        const updatedItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedItems);
      })
      .catch(err => console.log(err));
  };
  

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="cart">
        <h2>Danh sách mượn</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
               <div className='cart-avatar'>{item.avatar}</div>
           <div className='name-cart'>{item.name}</div>
           
           <div className='cart-price'>{item.price}</div>
              <button className='cart-button' onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: {totalPrice}</p>
       
          <Link to="/"> <button className='borrow-button'>Thanh toán</button></Link>
        
      </div>
    </>
  );
}

export default Cart;