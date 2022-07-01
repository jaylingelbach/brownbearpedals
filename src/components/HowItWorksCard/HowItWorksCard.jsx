import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import howItWorksCardInfo from '../../howItWorksCardInfo/howItWorksCardInfo';

export default function HowItWorksCard() {
  return (
    <Grid>
    {howItWorksCardInfo.map((prop, key) => {
        return (
          <Card variant=" outlined" key={key} sx={{ minWidth: 275, maxWidth: 350, mt: 2}}>
            <CardContent gutterbottom="true">
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterbottom="true">
                {prop.id}
              </Typography>
              <Typography variant="h5" component="div" gutterbottom="true">
                {prop.title}
              </Typography>
              <Typography variant="body2" gutterbottom="true">
                {prop.summary}
                <br />
              </Typography>
            </CardContent>
            <br></br>
            <br></br>
          </Card>
        );
      })}
    </Grid>

  );
}
  