import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import footerRoutes from '../Routes/FooterRoutes';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  let about = footerRoutes[0].path;
  let location = footerRoutes[1].path;
  let instagram = footerRoutes[2].path;

  return (
      <Box sx={{ width: 'auto', mt:2 }}>
      <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
          setValue(newValue);
          }}
      >
          <BottomNavigationAction href={about} label="About" icon={<InfoIcon />} />
          <BottomNavigationAction href={location} label="Location" icon={<LocationCityIcon />} />
          <BottomNavigationAction href={instagram} label="Instagram" icon={<InstagramIcon />} />
      </BottomNavigation>
      </Box>
  );
}
