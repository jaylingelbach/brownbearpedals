import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqQuestions from '../faqQuestions/faqQuestions';

export default function Faq() {
  return (
    <div className="App-body">
      <Container maxWidth="xl" sx={{marginTop:2}}>
        <div>
          {faqQuestions.map((prop, key) => {
            return (
              <Accordion key={key} sx={{textAlign:'start'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{ fontWeight: 'bold' }}>
                     {prop.summary}
                  </Typography>
                </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {prop.details}
                </Typography>
              </AccordionDetails>
          </Accordion>
            )
          })}
        </div>
      </Container>
    </div>
    
  );
}
