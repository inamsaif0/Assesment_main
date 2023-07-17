import './App.css';
import * as React from 'react';
import { AppBar, Button, Container, Toolbar , IconButton , Box , List , ListItem , ListItemButton , Avatar , ListItemText , Divider , Typography , Drawer, Stack, Card, CardContent, Icon, Rating } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo"
import SecurityIcon from '@mui/icons-material/Security'
import ManageSearchIcon from "@mui/icons-material/ManageSearch"
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop"
import KeyIcon from "@mui/icons-material/Key"
import TextsmsIcon from '@mui/icons-material/Textsms'
import VoiceChatIcon from "@mui/icons-material/VoiceChat"
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack"
import InstagramIcon from "@mui/icons-material/Instagram"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import ProjectLogo from './ProjectLogo.PNG'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import TwitterIcon from "@mui/icons-material/Twitter"
import CssBaseline from '@mui/material/CssBaseline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from "@mui/icons-material/Facebook"
import Image1 from "./Image1.PNG"
import Image2 from './Image2.PNG'
import Image3 from './Image3.PNG'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import apple from './apple.png'
import playstore from './playstore.png'

function App() {
  const navItems = ['Home','About','What We Treat','Blog','Contact Us']

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 , fontWeight : 'bold' }}>
        Mental Support
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
            <Divider/>
          </>
        ))}
      </List>
      <Button 
      variant='contained'
      sx = {{color : 'white' , 
      backgroundColor : '#3975AB' , 
      fontSize : '10px' , 
      paddingX : '20px' , 
      paddingY : '10px' , 
      borderRadius : '10px' , 
      fontWeight : 'bold' , 
      marginTop : '5px' ,
      }}>
        Get Started
      </Button>
    </Box>
  );

  return (
    <Box sx = {{ backgroundColor : '#F1F3F9' , width : "1465px"  }} >
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor : 'white' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } , color : 'black' }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx = {{ display: { xs: 'none', sm: 'block' } , flex : 1 }}>
          <img src={ProjectLogo} alt='Our Logo' width={200} height={100} />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } , flex : 1 }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: 'black'  , fontFamily : 'cursive' , fontSize : 'small' , fontWeight : 'bold' }}>
              {item}
            </Button>
          ))}
          <Button className={'getStarted'} variant='contained' sx = {{ 
            ml : 5 , 
            color : 'white' , 
            backgroundColor : '#3975AB' , 
            fontSize : '10px' , 
            paddingX : '20px' , 
            paddingY : '10px' , 
            borderRadius : '10px' , 
            fontWeight : 'bold' , 
            textTransform : 'capitalize' ,
            }}>
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '200px' },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
    <Box component="main" sx={{ pt: 3 , mt : 3 , width : "100%" }}>
      <Toolbar/>
      <Stack
      direction={'row'}
      >
        <Stack
        direction={'column'}
        style = {{ flex : 3 }}
        >
          <Typography sx = {{ textTransform : 'capitalize' , fontSize : '50px' , textAlign : 'center' , flex : 1 , margin : "10px" }}>
            Adult and <span style = {{ color : "#77AC28" , fontWeight : 'bold' }}>Youth Mental Health</span> Services at your <span style = {{ color : "#77AC28" , fontWeight : 'bold' }}>Fingertips</span>
          </Typography>
          <Typography sx = {{ textAlign : 'center' , margin : "20px" , opacity : 0.7 , flex : 1}}>
            Mental Support offers access to a trained and qualified team of clinicians though our on demand network for individuals seeking counseling services.
          </Typography>
          <Container sx = {{ flex : 4 }}>
            <Button variant='contained' sx = {{ 
              color : 'white' , 
              backgroundColor : '#3975AB' , 
              fontSize : '15px' ,
              width : "250px" ,
              borderRadius : '10px' , 
              fontWeight : 'bold' ,
              padding : "10px" ,
              marginLeft : '10px' ,
              textTransform : 'capitalize'
              }}>
              get Started
            </Button>
          </Container>
        </Stack>
        <img src={Image1} width={600} style={{ flex : 4 }} />
      </Stack>
      <Stack
      direction={'row'}
      >
        <img src={Image2} width={600} style={{ flex : 1 }} />
        <Stack
        direction={'column'}
        style={{ flex : 1 }}
        >
          <Typography sx = {{ textTransform : 'capitalize' , fontSize : '50px' , textAlign : 'center' , marginTop : "100px" , paddingTop : "20px" }}>
            <span style = {{ color : "#77AC28" , fontWeight : 'bold' }}>Professional</span>, licensed, and 
            <span style = {{ color : "#77AC28" , fontWeight : 'bold' }}> vetted therapists</span> who you can trust
          </Typography>
          <Typography sx = {{ flex : 1 , padding : "50px" , fontSize : "15px" }}>
            At Mental Support, you’re in good hands. Our team of clinicians are vetted and highly experienced at providing counseling services in a secure and confidential manner. 
            <Divider sx = {{ margin : "10px" }} />
            Our clinicians focus on improving mental health and support our clients throughout their journey in life. 
            <Divider sx = {{ margin : "10px" }}/>
            All our clinicians go through a stringent verification process which ensures that you’re always matched with a vetted clinician.
          </Typography>
        </Stack>
      </Stack>
      <Stack
      direction={'column'}
      sx = {{ margin : "10px" }}
      >
        <Stack
        direction={'row'}
        justifyContent={'center'}
        spacing={2}
        > 
          <Card sx = {{ backgroundColor : "#F1F3F9" , flex : 1, cursor : "pointer" }} variant='contained'>
            <CardContent>
              <center>
                <CalendarMonthIcon sx={{ width : "100px" , height : "100px" , color : "#A0D256" }}/>
              </center>
              <Typography sx = {{ fontWeight : 'bold' , marginTop : "30px" , fontSize : 'large' , textAlign : 'center' }}>Virtual Appointments</Typography>
            </CardContent>
          </Card>
          <Card sx = {{ backgroundColor : "white" , flex : 1 , borderBottom : "7px solid #A0D256", cursor : "pointer" }} variant='contained'>
            <CardContent>
              <center>
                <PersonalVideoIcon sx={{ width : "100px" , height : "100px" , color : "#A0D256" }}/>
              </center>
              <Typography sx = {{ fontWeight : 'bold' , marginTop : "30px" , fontSize : 'large' , textAlign : "center" }}>Secure Video Conferencing</Typography>
            </CardContent>
          </Card>
          <Card sx = {{ backgroundColor : "#F1F3F9" , flex : 1, cursor : "pointer" }} variant='contained'>
            <CardContent>
              <center>
                <SecurityIcon sx={{ width : "100px" , height : "100px" , color : "#A0D256" }}/>
              </center>
              <Typography sx = {{ fontWeight : 'bold' , marginTop : "30px" , fontSize : 'large' , textAlign : "center" }}>Secure & private chat</Typography>
            </CardContent>
          </Card>
        </Stack>
        <Stack
        direction={'row'}
        spacing={2}
        justifyContent={'center'}
        sx = {{ marginTop : "10px" }}
        > 
          <Card sx = {{ backgroundColor : "#F1F3F9" , flex : 1 , cursor : "pointer" }} variant='contained'>
            <CardContent>
              <center>
                <ManageSearchIcon sx={{ width : "100px" , height : "100px" , color : "#A0D256" }}/>
              </center>
              <Typography sx = {{ fontWeight : 'bold' , marginTop : "30px" , fontSize : 'large' , textAlign : "center" }}>Virtual Appointments</Typography>
            </CardContent>
          </Card>
          <Card sx = {{ backgroundColor : "#F1F3F9" , flex : 1 , cursor : "pointer" }} variant='contained'>
            <CardContent>
              <center>
                <ScreenSearchDesktopIcon sx={{ width : "100px" , height : "100px" , color : "#A0D256" }}/>
              </center>
              <Typography sx = {{ fontWeight : 'bold' , marginTop : "30px" , fontSize : 'large' , textAlign : "center" }}>Secure Video Conferencing</Typography>
            </CardContent>
          </Card>
          <Card sx = {{ backgroundColor : "#F1F3F9" , flex : 1 , cursor : "pointer" }} variant='contained'>
            <CardContent>
              <center>
                <KeyIcon sx={{ width : "100px" , height : "100px" , color : "#A0D256" }}/>
              </center>
              <Typography sx = {{ fontWeight : 'bold' , marginTop : "30px" , fontSize : 'large' , textAlign : "center" }}>Secure & private chat</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
      <Box>
        <img src={Image3} width={1465} />
      </Box>
    </Box>
    <Stack
        direction={'row'}
        spacing={2}
        justifyContent={'center'}
        sx = {{ marginTop : "10px" }}
        > 
          <Card sx = {{ backgroundColor : "#F1F3F9" , flex : 1 , cursor : "pointer" }} variant='contained'>
            <CardContent>
              <center>
                <TextsmsIcon sx={{ width : "100px" , height : "100px" , color : "#A0D256" }}/>
              </center>
              <Typography sx = {{ fontWeight : 'bold' , marginTop : "30px" , fontSize : 'large' , textAlign : "center" }}>Virtual Appointments</Typography>
            </CardContent>
          </Card>
          <Card sx = {{ backgroundColor : "#F1F3F9" , flex : 1 , cursor : "pointer" }} variant='contained'>
            <CardContent>
              <center>
                <VoiceChatIcon sx={{ width : "100px" , height : "100px" , color : "#A0D256" }}/>
              </center>
              <Typography sx = {{ fontWeight : 'bold' , marginTop : "30px" , fontSize : 'large', textAlign : "center" }}>Secure Video Conferencing</Typography>
            </CardContent>
          </Card>
          <Card sx = {{ backgroundColor : "#F1F3F9" , flex : 1 , cursor : "pointer" }} variant='contained'>
            <CardContent>
              <center>
                <VideoCameraBackIcon sx={{ width : "100px" , height : "100px" , color : "#A0D256" }}/>
              </center>
              <Typography sx = {{ fontWeight : 'bold' , marginTop : "30px" , fontSize : 'large', textAlign : "center" }}>Secure & private chat</Typography>
            </CardContent>
          </Card>
        </Stack>
        <Stack
        direction={'row'}
        sx = {{ backgroundColor : "#77AC28" , marginTop : "50px" , borderRadius : "60%" }}
        >
          <Stack
          direction={'column'}
          sx = {{ flex : 8 , alignItems : 'center' , alignSelf : "center" }}
          >
            <Typography variant='h4' sx = {{ fontWeight : "bold" , color : "white" }}>
              Mobile Apps Are Available <br/> on Google Playstore
            </Typography>
            <Stack
            direction={'row'}
            sx = {{ flex : 1 , marginTop : "20px" }}
            >
              <Box sx = {{ backgroundColor : "black" , height : "fit-content" , color : "lightgray" , borderRadius : "10px" , padding : "10px" , display : "flex" ,flexDirection : "row" }}>
                  <img src={playstore} width = {20} height = {20} style = {{ flex : 1 }} />
                  <Container sx = {{ flex : 4 }}>
                    <Typography sx = {{ fontSize : "xx-small" }}>
                      GET IT ON
                    </Typography>
                    <Typography sx = {{ fontWeight : "bold" , fontSize : "x-small" }}>
                      Google Play
                    </Typography>
                  </Container>
              </Box>  
              <Box sx = {{ backgroundColor : "black" , height : "fit-content"  , color : "lightgray" , borderRadius : "10px" , padding : "10px" , display : "flex" , marginLeft : "20px" , flexDirection : "row" }}>
                  <img src={apple} width = {20} height = {20} style = {{ flex : 1 , backgroundColor : "white" , borderRadius : "20px" }} />
                  
                  <Container sx = {{ flex : 4 }}>
                    <Typography sx = {{ fontSize : "xx-small" }}>
                      GET IT ON
                    </Typography>
                    <Typography sx = {{ fontWeight : "bold" , fontSize : "x-small" }}>
                      App Store
                    </Typography>
                  </Container>
              </Box>  
            </Stack>
          </Stack>
          <PhoneIphoneIcon sx = {{ flex : 5 , alignSelf : 'center' , width : "300px" , height : "300px" }} />
        </Stack>
        <Stack
        direction={"column"}
        spacing={2}
        sx = {{ background : "linear-gradient(#D4F1F4 30%,lightblue)" , opacity : 1 , marginTop : "50px" , justifyContent : 'center' , borderTopLeftRadius : "50%" , borderTopRightRadius : "50%" , paddingBottom : "30px" }}
        >
          <Typography variant = {'h4'} sx = {{ marginTop : "100px" , textAlign : "center" , fontWeight : "bold" , alignSelf : "center" , textTransform : "capitalize" }} color={'black'}>
            Take the first step <br/> to better mental health!
          </Typography>
          <Typography sx = {{ textAlign : "center" , fontWeight : "bold" , alignSelf : "center" , textTransform : "capitalize" , fontSize : 'x-small' }} color={'black'}>
            Get in touch today to take charge of your <br/> mental well being!
          </Typography>
          <Button sx = {{ background : "blue" , color : "white" , fontWeight : "bold" , width : "fit-content" , alignSelf : "center" }}>
            Book an Appointment
          </Button>
        </Stack>
        <Stack
        direction={'row'}
        spacing={2}
        sx = {{ paddingY : "100px" , marginRight : "50px" }}
        >
          <Stack
          direction={'column'}
          sx = {{ flex : 1 , marginLeft : "50px" , alignItems : 'center' }}
          >
            <Typography variant={'h3'} sx = {{ fontWeight : "bold" , flex : 1 }}>
              See what Partners <br/> are <span style = {{ color : "#77AC28" , fontWeight : 'bold' }}>saying</span>
            </Typography>
            <Card sx = {{ margin : "10px", width : "300px" }}>
              <CardContent sx = {{ display : "flex" , flex : 1 , flexDirection : "row" }}>
                <Avatar {...stringAvatar('Poorab Gangwani')} />
                <Typography>
                  <Typography sx = {{ fontSize : "medium" , fontWeight : "bold" , marginLeft : "10px" }}>Poorab Gangwani</Typography>
                  <Typography sx = {{ fontSize : "xx-small" , marginLeft : "10px" }}>CEO Amazon</Typography>
                </Typography>
                <FormatQuoteIcon sx = {{ marginLeft : "auto" , width : "30px" , height : "30px" , alignSelf : 'center' }} htmlColor="#5E9CD3"/>
              </CardContent>
            </Card>
            <Card sx = {{ margin : "10px" , width : "300px" }}>
              <CardContent sx = {{ display : "flex" , flex : 1 , flexDirection : "row" }}>
                <Avatar {...stringAvatar('Irfan Ali')} />
                <Typography>
                  <Typography sx = {{ fontSize : "medium" , fontWeight : "bold" , marginLeft : "10px" }}>Irfan Ali</Typography>
                  <Typography sx = {{ fontSize : "xx-small" , marginLeft : "10px" }}>Medical Assistant</Typography>
                </Typography>
                <FormatQuoteIcon sx = {{ marginLeft : "auto" , width : "30px" , height : "30px" , alignSelf : 'center' }} htmlColor="#5E9CD3"/>
              </CardContent>
            </Card>
            <Card sx = {{ margin : "10px" , width : "300px" }}>
              <CardContent sx = {{ display : "flex" , flex : 1 , flexDirection : "row" }}>
                <Avatar {...stringAvatar('Faizan Khan')} />
                <Typography>
                  <Typography sx = {{ fontSize : "medium" , fontWeight : "bold" , marginLeft : "10px" }}>Faizan Khan</Typography>
                  <Typography sx = {{ fontSize : "xx-small" , marginLeft : "10px" }}>Marketing Coordinator</Typography>
                </Typography>
                <FormatQuoteIcon sx = {{ marginLeft : "auto" , width : "30px" , height : "30px" , alignSelf : 'center' }} htmlColor="#5E9CD3"/>
              </CardContent>
            </Card>
          </Stack>
          <Stack
          direction={'column'}
          sx = {{ flex : 1 }}
          >
            <Card sx = {{ marginRight : "10px" , flex : 1 }}>
              <CardContent sx = {{ display : "flex" , flex : 1 , flexDirection : "column" }}>
                <Stack 
                direction={'row'}
                >  
                  <Avatar {...stringAvatar('Poorab Gangwani')} />
                  <Typography sx = {{ alignSelf : "center" }}>
                    <Typography sx = {{ fontSize : "medium" , fontWeight : "bold" , marginLeft : "10px" }}>Poorab Gangwani</Typography>
                    <Typography sx = {{ fontSize : "xx-small" , marginLeft : "10px" }}>CEO Amazon</Typography>
                  </Typography>
                  <FormatQuoteIcon sx = {{ marginLeft : "auto" , width : "50px" , height : "50px" , alignSelf : 'center' }} htmlColor="#5E9CD3"/>
                </Stack>
                <Rating value = {3} readOnly />
                <Typography sx = {{ fontSize : "15px" , textAlign : "center" , margin : "20px" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled <br/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s,
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
        <Stack
        direction={'column'}
        spacing={2}
        sx = {{ backgroundColor : "white" , borderTopLeftRadius : "90%" , borderTopRightRadius : "90%" }}
        >
          <ArrowCircleUpIcon htmlColor={'white'} sx = {{ backgroundColor : "lightblue" , borderRadius : "50%" , width : "70px" , height : "70px" , alignSelf : "center" , position : "relative" , top : "-20px" }} />
          <img src={ProjectLogo} alt='Our Logo' width={200} height={100} style = {{ flex : 1 , alignSelf : "center" }} />
          <Stack
          direction={'row'}
          spacing={2}
          sx = {{ justifyContent : "center" }}
          >
            <Typography sx = {{ fontSize : "small" , cursor : "pointer" , color : "black" }}>Home</Typography>
            <Typography sx = {{ fontSize : "small" , cursor : "pointer" , color : "black" }}>About</Typography>
            <Typography sx = {{ fontSize : "small" , cursor : "pointer" , color : "black" }}>Service</Typography>
            <Typography sx = {{ fontSize : "small" , cursor : "pointer" , color : "black" }}>Knowledge</Typography>
            <Typography sx = {{ fontSize : "small" , cursor : "pointer" , color : "black" }}>Contact Us</Typography>
          </Stack>
          <Stack
          direction={'row'}
          spacing={2}
          sx = {{ justifyContent : "center" }}
          >
            <FacebookIcon htmlColor='blue'/>
            <TwitterIcon htmlColor='lightblue' />
            <LinkedInIcon htmlColor='darkblue' />
            <InstagramIcon htmlColor='lightpink' />
          </Stack>
          <Divider/>
          <Typography textAlign={'center'}>© 2023 Mental Support. All rights reserved, Privacy Policy and Terms of Use</Typography>
        </Stack>
    </Box>
  );
}

export default App;
