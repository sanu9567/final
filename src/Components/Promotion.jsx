import React from 'react';
import { Data } from "./Data";
import Customcard from "./Customcard";
import { Box, Container, Typography, styled } from '@mui/material';

const Promotion = () => {
    const DishesBox = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"space-between",
    marginTop:theme.spacing(5),
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignItems:"center",
    },
    }));

const PropertiesTextBox=styled(Box)(({theme})=>({
[theme.breakpoints.down("md")]:{
    textAlign:"center",
},
}))

  return (
    <Box sx={{ mt:2,backgroundColor:"#F5FAFE",py:10}}>
        <Container>
            <PropertiesTextBox>
                <Typography
                    sx={{ color: "#000339",fontSize:"35px", fontWeight:"bold",m1:"20px"}}>
                    OFFER DISHES
                </Typography>
                <Typography
                    sx={{ color: "#5A6473",fontSize:"16px", mt: 1,m1:"13px"}}>
                    use the offers
                </Typography>
            </PropertiesTextBox>
            <DishesBox>
                {Data.map((foodItem) =>(
                    <Customcard
                    key={foodItem.id}
                    img={foodItem.img}
                    price={foodItem.price}
                    item={foodItem.item}
                    likes={foodItem.likes}
                    heart={foodItem.heart}
                    share={foodItem.share}
                    />
                ))}
            </DishesBox>
        </Container>
    </Box>
  );
};

export default Promotion