import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import howItWorksCardInfo from '../../faqQuestions/howItWorksCardInfo/howItWorksCardInfo';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function HowItWorksCard() {
  return (
    <div>
    {howItWorksCardInfo.map((prop, key) => {
        return (
          <Card variant=" outlined" sx={{ minWidth: 275, maxWidth: 350, mt: 2, justifyContent: 'center' }}>
            <CardContent gutterBottom>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {prop.id}
              </Typography>
              <Typography variant="h5" component="div">
                {prop.title}
              </Typography>
              <Typography variant="body2">
                {prop.summary}
                <br />
              </Typography>
            </CardContent>
            <br></br>
            <br></br>
          </Card>
        );
      })}
    </div>

  );
}
  