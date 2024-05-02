import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

import MenuIcon from "@mui/icons-material/Menu";
import  FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const[mobileMenu ,setMobileMenu]=useState({left:false})
   
  const navigate = useNavigate()
   
  const toogleDrawer=(anchor,open)=>(event)=>{
    if(event.type === "keydown" && (event.type === "Tab" || event.type === "shift")){
      return;
    }
setMobileMenu({...mobileMenu,[anchor]:open})

  }

  const list=(anchor)=>(
<Box sx={{
  width:anchor === "top" || anchor === "bottom" ? "auto":250

}}
role="presentation"
onClick={toogleDrawer(anchor,false)}
onKeyDown ={toogleDrawer(anchor,false)}
>
<List>
        {

    nav_titles.map((item,index)=>(
            <ListItem key={item.index} disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
               {
                index === 0 && <HomeIcon/>
               }
               {
                index === 1 && <FeaturedPlayListIcon/>
               }
               {
                index === 2 && <MiscellaneousServicesIcon/>
               }
               {
                index === 3 && <ContactsIcon />
               }
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
          ))
        }
          
        
      </List>
</Box>
  )
   const nav_titles =[{
    path:'/',
    display:'dash'
    
   },
   {
    path:'/menu',
    display:'menu'
   },
   {
    path:'/offer',
    display:'offer'
   },
  //  {
  //   path:'/',
  //   display:'ABOUT US'
  //  },
] 


const NavBarLinksBox=styled(Box)(({theme})=>({
    display:'flex',
    alignItems:"center",
    justifyContent:"",
    gap:theme.spacing(3),
    padding:'6px',
    maxWidth:'auto',
    backgroundColor:"orange",
    marginLeft:'0px',
    marginBottom:'-24px',
    [theme.breakpoints.down("md")]:{
        display:'none'
    }
}));

const NavBarLink=styled(Typography)(()=>({
    fontSize:"15px",
    color:'#4F5361',
    fontWeight:'bold',
    cursor:'pointer',
    '&:hover':{
        color:'#fff'
    }
}));

const CustomMenuIcon=styled(MenuIcon)(({theme})=>({
  cursor:'pointer',
  display:'none',
  marginRight:theme.spacing(2),
  [theme.breakpoints.down("md")]:{
      display:"block",
  }
}));


  return (
    
        

    <Box>
      <CustomMenuIcon onClick={toogleDrawer("left",true)}/>
      <Drawer
        anchor="left"
        open={mobileMenu["left"]}
        onClose={toogleDrawer("left",false)}
      >
        {list("left")}

      </Drawer>
        <NavBarLinksBox>
             {
                nav_titles.map((item,index)=>(
                    <NavBarLink variant="body2" onClick={()=>navigate(item.path)}>
                    {item.display}
                 </NavBarLink>
                ))
                }

            
            
          
        </NavBarLinksBox>
       
    </Box>
      
  )
}

export default Header