import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Logo from '../assets/bbcLogo.png';

const pages = ['How it works', 'FAQ', 'Contact'];

const ResponsiveAppBar = () => {
  const [setAnchorElNav] = React.useState(null);
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const trigger = useScrollTrigger();
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
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
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block', margin: 'auto' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
