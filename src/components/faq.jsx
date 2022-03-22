import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq() {
  return (
    <div className="App-body">
      <Container maxWidth="xl">
        <div>
          <Accordion sx={{textAlign:'start'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{fontWeight:'bold'}}>There might be a problem with my pedal. What do I do?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Please contact us here. Once the 
              troubleshooting procedure has been completed 
              (over 75% of issues are fixed this way). If the pedal needs to 
              come back to us, you will need to complete the return 
              form (with the RA number provided by us) and include it in the 
              package. Details of where to send it to you will be provided with
              the RA number.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{textAlign:'start'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{fontWeight: 'bold'}}>What is the warranty on your pedals?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                1 year warranty includes parts and labor and return shipping back 
                to you within Continental USA. You are responsible to ship it to 
                us. If we open it up and find repairs are needed because of 
                misuse, abuse (accidental or not) or neglect than we cannot 
                cover the repairs for free.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </div>
    
  );
}
