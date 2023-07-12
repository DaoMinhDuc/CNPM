import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, TextField, Button, Select, MenuItem } from '@mui/material';
import Admin from '../AdminPage/Admin';
import '../formAdd.css';

interface Profile {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other' | null;
  username: string;
  password: string;
  address: string;
}

function UserAccountAdd() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit: SubmitHandler<Profile> = (data) => {
    axios
      .post('https://6477745a9233e82dd53bb1e7.mockapi.io/UserAccount', data)
      .then((response) => {
        navigate('/UserAccountList'); // Chuyển hướng về trang danh sách sau khi thêm mới thành công
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="Add">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Thêm người dùng</h2>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField label="Name" {...register('name')} fullWidth />
              {errors.name && <p>{errors.name.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Age"
                type="number"
                {...register('age')}
                fullWidth
              />
              {errors.age && <p>{errors.age.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <Select label="Gender" {...register('gender')} fullWidth>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              {errors.gender && <p>{errors.gender.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                {...register('address')}
                fullWidth
              />
              {errors.address && <p>{errors.address.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                {...register('username')}
                fullWidth
              />
              {errors.username && <p>{errors.username.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                {...register('password')}
                fullWidth
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" style={{marginRight: '10px'}}>
               Thêm người dùng
              </Button>
              <Link to="/UserAccountList">
                <Button variant="contained">Hủy</Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default UserAccountAdd;
