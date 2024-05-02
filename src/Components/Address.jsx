import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <div>
        <Typography variant='h4'>Enter complete address</Typography>
        <Typography variant='59'>save address as*</Typography><br />
        <button>Home</button>&nbsp;
        <button>Work</button>&nbsp;
        <button>Hotel</button>&nbsp;
        <button>Other</button>&nbsp;
        <br /><br />
        <TextField label="Receiver's name "/><br /><br />
        <TextField label="Receiver's contact "/><br /><br />
        <Typography>_ __ __ __ __ __ __ __ __ __ __ __ __ __ _</Typography><br />
        <TextField label="Flat / House no / Floor / Building*"/><br /><br />
        <TextField label="Area / Sector / Locality*"/><br /><br />
        <TextField label="Nearby landmark (optional)"/><br />

        <br /><br />
        <Button variant='contained'color='error'>
        <Link to={'/order'} style={{textDecoration:'none', color:'white'}}>
          Save address</Link></Button>
        

    </div>
  )
}

export default Address