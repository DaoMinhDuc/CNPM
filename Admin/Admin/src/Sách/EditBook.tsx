import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import AdminHeader from '../AdminHeader';
import Admin from '../AdminPage/Admin';

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    name: '',
    description: '',
    price: '',
    avatar: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://6469ffaa03bb12ac20975da5.mockapi.io/book/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateBook = () => {
    axios
      .put(`https://6469ffaa03bb12ac20975da5.mockapi.io/book/${id}`, book)
      .then((res) => {
        navigate('/Admin');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="Edit">
        <form>
        <h2>Sửa thông tin sách</h2>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                label="Tên sách"
                name="name"
                value={book.name}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Chú thích"
                name="description"
                value={book.description}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Giá"
                name="price"
                value={book.price}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Ảnh bìa sách"
                name="avatar"
                value={book.avatar}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={updateBook}>
                Update Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default EditBook;
