import {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link, useLocation } from "react-router-dom"
import db_logo from "../assets/digital-bolt-logo-without-title.png"
// const drawerWidth = 240;
const navItems = [ 'about', 'services', 'contact'];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default function HeaderNav(props) {
  const {pathname} = useLocation()

    const { children, window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };


  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        {/* <Typography variant="h6" sx={{ my: 2, color: '#f0ad4e' }}>
          DIGITAL BOLT
        </Typography> */}
          <Typography
            variant="h5"
            component="div"
            align='center'
            className='p-2 p-sm-3'
          >
             <Link to="/" ><img className='card-img rounded-circle' src={db_logo} alt="Logo" style={{height: "15%", width: '15%'}} /></Link>
          </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <div className='p-2 px-5 p-lg-5' key={item}>
              {/* <Button onClick={() => onTop()} key={item}> */}
                <Link style={{textDecoration: 'none'}} to={item === "home" ? `/` : `${item}`} >
                  {pathname === `/${item}` ? 
                  <div className='ue_btn ue_btn_active btn btn-sm animated-button-active thar-three px-3 px-lg-5 py-2' style={{color: 'black', margin:0, textTransform: "uppercase"}}>
                    <strong>{item}</strong>
                  </div> : 
                  <div className='ue_btn btn btn-sm animated-button thar-three px-3 px-lg-5 py-2' style={{color: 'black', margin:0, textTransform: "uppercase"}}>
                    <strong>{item}</strong>
                  </div>}
                </Link>
              {/* </Button> */}
            </div>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
    // console.log(pathname ===`/${navItems[1]}`)
    const onTop = () => {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    }
  return (
    <>
      <CssBaseline/>
      <HideOnScroll sx={{background: 'transparent', opacity: '0.5'}} {...props}>
      <AppBar component="nav" sx={{backgroundColor: 'white'}}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            align='right'
            className='p-2 p-sm-3'
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: "start", color: '#f0ad4e' }}
          >
            <Link to="/" style={{textDecoration: 'none'}}><span className='px-3'>
              <img className='card-img rounded-circle' src={db_logo} alt="Logo" style={{height: "7vh", width: '7vh'}} />
              <strong className='text-dark'>DIGITAL BOLT</strong></span></Link>
          </Typography>
          <Typography
            variant="h5"
            component="div"
            align='right'
            className='p-2 p-sm-3'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: "start", color: '#f0ad4e' }}
          >
            <Link to="/" style={{textDecoration: 'none'}}><span className='px-3'>
            <img className='card-img rounded-circle' src={db_logo} alt="Logo" style={{height: "7vh", width: '7vh'}} />
              <strong className='text-dark'>DIGITAL BOLT</strong></span></Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button  onClick={() => onTop()} key={item} sx={{ margin: 1, boxShadow: 'none' }}>
                <Link style={{textDecoration: 'none'}} to={item === "home" ? `/` : `${item}`} >
                {pathname === `/${item}` ? 
                <div className='ue_btn ue_btn_active btn btn-sm animated-button-active thar-three px-3 px-lg-4 py-2' style={{color: 'black', margin:0}}>
                  {item}
                </div> : 
                <div className='ue_btn btn btn-sm animated-button thar-three px-3 px-lg-4 py-2' style={{color: 'black', margin:0}}>
                  {item}
                </div>}
                  </Link>
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            size='large'
            sx={{ mr: 2, display: { md: 'none' }, color: '#000' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor='top'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 'auto' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
      <div>{children}</div>
    </>
  );
}