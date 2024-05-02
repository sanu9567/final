import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ImgMediaCard() {
  return (
    <>
    <Typography variant="h1" color="black">
    VARIETY DISHES
        </Typography>
        <Typography variant="h4" color="text.secondary">
        Explore Varieties With KABAB 
        </Typography>
        <br /><br />
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="data:image/jpeg;base64,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"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Biriyani
        </Typography>
        <Typography variant="body2" color="text.secondary">
        traditional dish is infused with aromatic spices and rich flavours in every bite. The dish's fans swear by its unusual flavour
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained">
        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
          Buy</Link></Button>
      </CardActions>
    </Card>


   
    <Card sx={{ maxWidth: 345, marginTop:" -320px" ,marginLeft:"400px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/jpeg;base64,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"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Masala Dhosha
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The sambar and even the masala dosa have some of the major pure Indian spices, which will give it that wow factor you have been looking for in breakfast food
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained">
        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
          Buy</Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, marginTop:" -320px" ,marginLeft:"800px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUR62hjRc1iGvZIYsU2fNwlIQQAWuLOTovQ&s"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Idli
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It is also a very healthy option as it is low in fat and high in protein. Idli is made from a fermented batter of rice and lentils, which makes it extremely nutritious
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained">
        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
          Buy</Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhn_P1wDF5MtMNm91ajrn0VwifHBDDOO7LQ&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Panipuri Shavarma
        </Typography>
        <Typography variant="body2" color="text.secondary">
        popular bite-size chaat consisting of a hollow, crispy-fried puffed ball that is filled with potato, chickpeas, onions, spices, and flavoured water, usually tamarind or mint, and popped into one's mouth whole.
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained">
        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
          Buy</Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, marginTop:" -320px" ,marginLeft:"800px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-OrLUYL5ovlcw2BBMWVRNWP3grbR4k31mtoDPzDH9ex_mADC9NXS4WpMVP6Bo52RQuA&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          PanCake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        a flat cake usually made of thin batter and cooked on both sides on a griddle or in a frying pan
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained">
        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
          Buy</Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, marginTop:" -320px" ,marginLeft:"400px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JDyP0-bt6rh-z3e0JDMjVIwumz9Qx-sZdIJMHLUP5fIVZ5dreDEMm3HSWZVyAvt-w6k&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Noodles
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained">
        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
          Buy</Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2022/12/THEME_FOOD_GYOZA_GettyImages-1285856438.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Momos
        </Typography>
        <Typography variant="body2" color="text.secondary">
        dumpling made from plain flour and filled with either meat or vegetables. Inspired by Tibetan dumplings, the dish is a very popular Nepali street food 
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained">
        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
          Buy</Link></Button>
      </CardActions>
    </Card>


   
    <Card sx={{ maxWidth: 345, marginTop:" -320px" ,marginLeft:"400px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RmApTWSBaikzvWA_URRdDAh1TjXbbpW8nA&s"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shavarma
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Shawarma is prepared from thin cuts of seasoned and marinated lamb, mutton, veal, beef, chicken, or turkey.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained">
        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
          Buy</Link></Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, marginTop:" -320px" ,marginLeft:"800px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnr41QqAdTDX6rNqH2Pax4F8LDa47eBJmgHQ&s"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sadhya
        </Typography>
        <Typography variant="body2" color="text.secondary">
        variety of traditional vegetarian dishes usually served on a banana leaf in Kerala as lunch.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained">
        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
          Buy</Link></Button>
      </CardActions>
    </Card>
    


    </>
  );
}


       
