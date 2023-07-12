import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';


const EmployeeEdit = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://647a1920a455e257fa644fb2.mockapi.io/employee/${id}`)
      .then((response) => {
        const { name, age, position, username, password } = response.data;
        setName(name);
        setAge(age);
        setPosition(position);
        setUsername(username);
        setPassword(password);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const updateEmployee = () => {
    const updatedEmployee = {
      name,
      age: parseInt(age),
      position,
      username,
      password,
    };

    axios
      .put(
        `https://647a1920a455e257fa644fb2.mockapi.io/employee/${id}`,
        updatedEmployee
      )
      .then((response) => {
        console.log(response.data);
        navigate('/Admin');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="Edit">
        <form>
        <h2>Sửa thông tin nhân viên</h2>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={updateEmployee}>
                Update Employee
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default EmployeeEdit;
