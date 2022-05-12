import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';

export default function Home() {

  return (
      <div className='Contact-body'>
      <Typography component={'div'} sx={{m:2}}>
          Have a question for us? You've come to the right place!
        <br/>
          If you have a repair see our troubleshooting articles to see if 
            your questions can be answered.
        <br/>
          If you still have a question, please fill out our repair request form.
          <Typography component={'span'} variant="subtitle2" sx={{m:2}}>
          <br/>
            * Our support hours are Monday-Friday 8am - 5pm Central
          <br/>
          </Typography>
        </Typography>
          <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch', color: 'white' },
          }}
          noValidate // REVISIT boilerplate code
          autoComplete="off"
          >
            {/* Refactor this form dynamically */}
            <div>
              <TextField
                required
                id="outlined-required"
                label="First name"
              />
              <TextField
                required
                id="outlined-required"
                label="Last name"
              />
            {/* </div> */}
            {/* <div> */}
            <TextField
                required
                id="outlined-required"
                label="Email"
            />
            <TextField
              required
              id="outlined-required"
              label="Subject"
            />
            {/* </div> */}
            {/* <div> */}
            <TextField
              required
              id="outlined-required"
              label="Message"
              fullWidth={true}
              multiline={true}
              minRows={10}
              maxRows={60}
            />
            </div>
          </Box>
        </div>
  );
}
