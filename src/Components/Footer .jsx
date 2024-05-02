import React from 'react';
import fbIcon from  './Image/facebook.png';
import twitterIcon from  './Image/twitter.png';
import linkedinIcon from  './Image/instagram.png'
import { Box, Container, Typography, styled } from '@mui/material';


const footer  = () => {
    const CustomContainer = styled(Container)(({theme})=>({
        display:"flex",
        justifyContent:"space-around",
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            textAlign:"right",
        },
    }));

    const IconBox = styled(Box)(({theme})=>({
        display:"flex",
        alignItems:"center",
        gap:"1rem",
        [theme.breakpoints.down("sm")]:{
            justifyContent:"center",
        },
    }));
      

    const FooterLink = styled("span")(({theme})=>({
      fontSize:"16px",
      color:"#000066",
      fontWeight:"300",
      cursor:"pointer",
      "&:hover":{
        color:"#6682FF",
      },
    }));
    
  return (
    <Box sx={{py:7, backgroundColor:"#FFF682"}}>
        <CustomContainer>

            <Box>
                <Typography
                      sx={{
                        fontSize:"20px",
                        color:"#1C1C1D",
                        fontWeight:"700",
                        mb:2,
                      }}
                    >
                        featured  
                </Typography>
                <FooterLink>Guides</FooterLink>
                <br />
                <FooterLink>Services</FooterLink>
                <br />
                <FooterLink>Contact Us</FooterLink>
            </Box>

            <Box>
                <Typography
                      sx={{
                        fontSize:"20px",
                        color:"#1C1C1D",
                        fontWeight:"700",
                        mb:2,
                      }}
                    >
                        OverView 
                </Typography>
                <FooterLink>Location</FooterLink>
                <br />
                <FooterLink>Partnerships</FooterLink>
                <br />
                <FooterLink>Terms of use & privacy Policies</FooterLink>
            </Box>

            <Box>
                <Typography
                      sx={{
                        fontSize:"20px",
                        color:"#1C1C1D",
                        fontWeight:"700",
                        mb:2,
                      }}
                    >
                        Get in touch 
                </Typography>
                
                <Typography
                      sx={{
                        fontSize:"20px",
                        color:"#1C1C1D",
                        fontWeight:"700",
                        mb:2,
                      }}
                    >
                        Keep in touch with our social media pages.
                </Typography>

                <IconBox>
                    <img src={fbIcon} alt="fbIcon" styled={{curcor:"pointer"}}/>
                    <img 
                       src={twitterIcon}
                       alt="twitterIcon"
                       style={{curcor:"pointer"}}
                    />
                    <img 
                       src={linkedinIcon}
                       alt="linkedinIcon"
                       style={{curcor:"pointer"}}
                    />
                </IconBox>
            </Box>
        </CustomContainer>
    </Box>
  )
}

export default footer 