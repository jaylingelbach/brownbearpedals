import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Logo from '../assets/bbcLogo.png';
import routes from '../Routes/HeaderRoutes';

const ResponsiveAppBar = (props) => {
  const trigger = useScrollTrigger();
  


  return (
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
              <Box
                component="img"
                sx={{
                  height: 64,
                }}
                alt="Logo"
                src={Logo}
                aria-label="Logo for Brown Bear Creative"
              />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>    
                {routes.map((prop, key) => {
                  return (
                    <Button
                      key={key}
                    sx={{ display: 'block', margin: 'auto', textDecoration:'none', color:'white' }}
                    href={prop.path}
                    >
                      {prop.navName}
                    </Button>
                  );
                })}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
  );
};
export default ResponsiveAppBar;
