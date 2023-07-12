import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Count: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get('https://647a1920a455e257fa644fb2.mockapi.io/employee')
      .then((res) => setCount(res.data.length))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Số lượng phần tử: {count}</h2>
    </div>
  );
};

export default Count;
