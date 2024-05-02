import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';

const AddMandhiForm = () => {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/viewfood')
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.error('Error fetching foods:', error);
      });
  }, []);

  const deleteValue = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/removem/${id}`)
      .then((response) => {
        alert(response.data);
        setFoods(foods.filter(food => food._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/addfood', { title, rate, imageUrl });
      setTitle('');
      setRate('');
      setImageUrl('');
      alert('Food item added successfully!');
      window.location.reload(false);
    } catch (error) {
      console.error('Error adding food item:', error);
      alert('Error adding food item. Please try again.');
    }
  };

  return (
    <>
      <br /><br /><br /><br />
      <Typography variant='h3'>FOOD</Typography>
      <TextField
        id='title'
        label='Enter Title'
        variant='outlined'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)} /><br /><br />
      <TextField
        id='rate'
        label='Enter rate'
        variant='outlined'
        name='description'
        value={rate}
        onChange={(e) => setRate(e.target.value)} /><br /><br />
      <TextField
        id='imageUrl'
        label='Enter imageUrl'
        variant='outlined'
        name='imageUrl'
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)} /><br /><br />
      <Button variant='contained' onClick={handleSubmit}>Submit</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell>ImageUrl</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map((food) => (
            <TableRow key={food._id}>
              <TableCell>{food.title}</TableCell>
              <TableCell>{food.rate}</TableCell>
              <TableCell>{food.imageUrl}</TableCell>
              <TableCell>
                <Button
                  onClick={() => deleteValue(food._id)}
                  size="small"
                  variant='contained'
                  color='secondary'>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AddMandhiForm;
