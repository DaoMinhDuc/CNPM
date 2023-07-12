import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';


const EmployeeAdd = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const addEmployee = () => {
    const newEmployee = {
      name,
      age: parseInt(age),
      position,
      username,
      password,
    };

    axios
      .post('https://647a1920a455e257fa644fb2.mockapi.io/employee', newEmployee)
      .then((response) => {
        console.log(response.data);
        // Reset form values
        setName('');
        setAge('');
        setPosition('');
        setUsername('');
        setPassword('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      
      <div className="Add">
       
        <form>
        <h2>Thêm Nhân Viên</h2>
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
              <Button variant="contained" onClick={addEmployee}>
                Add Employee
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default EmployeeAdd;
