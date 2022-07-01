import {Grid} from '@mui/material';
import * as React from 'react';
import HowItWorksCard from './HowItWorksCard/HowItWorksCard';


export default function HowItWorks() {
  return (
      <Grid container className="How-it-works">
        <Grid item className="How-it-works-steps">
          <h3>5 simple steps</h3>
          <h4>How does it work?</h4>
          <br/>
          <HowItWorksCard></HowItWorksCard>
        </Grid>
      </Grid>
  );
}

