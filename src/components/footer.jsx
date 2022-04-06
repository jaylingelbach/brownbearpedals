import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);


  return (
      <Box sx={{ width: 'auto' }}>
      <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
          setValue(newValue);
          }}
      >
          <BottomNavigationAction label="About" icon={<InfoIcon />} />
          <BottomNavigationAction label="Location" icon={<LocationCityIcon />} />
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
      </BottomNavigation>
      </Box>
  );
}