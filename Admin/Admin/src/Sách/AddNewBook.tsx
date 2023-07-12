import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Grid } from '@mui/material';
import Admin from '../AdminPage/Admin';
import '../formAdd.css';

const AddNewBook = () => {
  const [newBook, setNewBook] = useState({
    name: '',
    description: '',
    price: '',
    avatar: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addNewBook = () => {
    axios
      .post('https://6469ffaa03bb12ac20975da5.mockapi.io/book', { data: newBook })
      .then((res) => {
        navigate('/AddBook');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="Add">
        
        <form>
        <h2>Add New Book</h2>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                label="Tên sách"
                name="name"
                value={newBook.name}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Chú thích"
                name="description"
                value={newBook.description}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Giá"
                name="price"
                value={newBook.price}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Ảnh bìa sách"
                name="avatar"
                value={newBook.avatar}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={addNewBook}>
                Add Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default AddNewBook;
