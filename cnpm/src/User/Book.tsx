
import axios from 'axios';
import {useEffect, useState} from 'react';
import "./Book.css";
import Header from './Header';


function Book() {
    const [listBook, setListBook] = useState<any[]>([])

   
    useEffect(() => {
      axios.get('https://6469ffaa03bb12ac20975da5.mockapi.io/book')
        .then(res => setListBook(res.data))
        .catch(err => console.log(err));
    }, []);

    const addToCart = (item: any) => {
      axios
        .post('https://64731641d784bccb4a3c4073.mockapi.io/themuon/themuon', item)
        .then((res) => console.log('Item added to cart:', res.data))
        .catch((err) => console.log(err));
    };
   
   
    return(
        <>
       <Header />
        {listBook.map((item) => (
            <div  key={item.id} className="card-container">
            <div  className='card'>
           <div className='avatar'>{item.avatar}</div>
           <div className='info'>
           <div className='nameBook'>{item.name}</div>
           <div className='description'>{item.description}</div>
           <div className='price'>{item.price}</div>
           </div> 
           <button className='Book-Button' onClick={() => addToCart(item)}>Mượn sách</button>
          </div>
           </div>
          
    ))
}

  
</> 
)
}

export default Book