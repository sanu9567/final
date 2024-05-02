import React from 'react'
import Image from './Image/ui.jpg'
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from './Footer ';

const Home = () => {
    const backgroundImageStyle={
        position: 'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        zIndex: -1,
      };
  return (
    <div>
     <img
     src={Image}
     alt="bac"
     style={backgroundImageStyle}
     />
    <div >
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br />
     <br /> <Typography variant="h1" color={'black'} align='center'>
     Fresh And Delicious
     </Typography>
     &nbsp;&nbsp;&nbsp;<Typography variant="h5" color={'black'} align='center'>
     Traditional Indian Food To Delight The Whole Family
     </Typography>
     <br /><br />
     <Button variant='contained' style={{ padding:'4px'}} color='warning'>
     <Link to={'/Menu'} style={{textDecoration:'none', color:'white'}}>
      view more</Link></Button>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
      <br /><br />
      <Footer/>
      </div> 
  )
  }


export default Home