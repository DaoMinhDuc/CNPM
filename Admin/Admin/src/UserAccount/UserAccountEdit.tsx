import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, TextField, Button, Select, MenuItem } from '@mui/material';


interface Profile {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other' | null;
  username: string;
  password: string;
  address: string;
}

interface UserAccountParams {
  id: string;
}

function UserAccountEdit() {
  const { id } = useParams<UserAccountParams>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Profile>();

  const [user, setUser] = useState<Profile>({
    name: '',
    age: 0,
    gender: null,
    username: '',
    password: '',
    address: '',
  });

  useEffect(() => {
    axios
      .get(`https://6477745a9233e82dd53bb1e7.mockapi.io/UserAccount/${id}`)
      .then((response) => {
        const userData = response.data;
        setUser(userData);
        setValue('name', userData.name);
        setValue('age', userData.age);
        setValue('gender', userData.gender);
        setValue('username', userData.username);
        setValue('password', userData.password);
        setValue('address', userData.address);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, setValue]);

  const onSubmit: SubmitHandler<Profile> = (data) => {
    axios
      .put(`https://6477745a9233e82dd53bb1e7.mockapi.io/UserAccount/${id}`, data)
      .then((response) => {
        navigate('/UserAccountList'); // Chuyển hướng về trang danh sách sau khi cập nhật thành công
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
     
      <div className="Edit">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Sửa thông tin người dùng</h2>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                label="Name"
                defaultValue={user.name}
                {...register('name')}
                fullWidth
              />
              {errors.name && <p>{errors.name.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Age"
                type="number"
                defaultValue={user.age}
                {...register('age')}
                fullWidth
              />
              {errors.age && <p>{errors.age.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <Select
                label="Gender"
                defaultValue={user.gender}
                {...register('gender')}
                fullWidth
              >
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              {errors.gender && <p>{errors.gender.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                defaultValue={user.address}
                {...register('address')}
                fullWidth
              />
              {errors.address && <p>{errors.address.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                defaultValue={user.username}
                {...register('username')}
                fullWidth
              />
              {errors.username && <p>{errors.username.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                defaultValue={user.password}
                {...register('password')}
                fullWidth
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" style={{marginRight: '10px'}}>
                Save
              </Button>
              <Link to="/UserAccountList">
                <Button variant="contained">Cancel</Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default UserAccountEdit;
