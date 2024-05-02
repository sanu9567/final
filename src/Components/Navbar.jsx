import { AppBar, Box, Button, IconButton, Toolbar} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { orange, pink } from '@mui/material/colors';



const Navbar = () => {
  
  return (
    <div>
          
        <Box sx={{ flexgrow: 0}}>
        <AppBar position="static" color='' style={{height:'0px'}}>
            <Toolbar>
            <img
                           src="https://dynamic.design.com/asset/logo/53703663-f2ea-4e81-8b89-44965b073800/logo-search-grid-1x?logoTemplateVersion=2&v=638432716276870000&text=KABAB++RESTUARANT"
                            width="130" height="102.9"></img>
                            &nbsp;&nbsp;
                             
            <IconButton>
            <Link to={'/home'} style={{textDecoration:'none', color:"warning"}}>
            <HomeIcon sx={{ fontSize: 40 ,color:orange[500] }}  />
            </Link>
           </IconButton>
          <form class="form-filled">
             <input style={{marginLeft:"600px"}} type="search" placeholder="Search"/>&nbsp;
             <button  type="submit">Search</button>&nbsp;&nbsp;
         </form>  
         &nbsp;&nbsp;&nbsp;
          
            
            </Toolbar>
          </AppBar> 
        </Box>
       
        
        
</div>
  )
}

export default Navbar