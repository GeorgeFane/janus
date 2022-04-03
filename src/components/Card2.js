import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          #1 Song This Week
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Heat Waves #1, this week
        </Typography>

        <Grid container>
          <Grid container color='darkGreen'>
            <Grid item xs={6}>
              <Typography>
                Buy Yes
              </Typography>
            </Grid>

            <Grid item>
              <Typography xs={6}>
                98c
              </Typography>
            </Grid>
          </Grid>

          <Grid container color='darkRed'>
            <Grid item xs={6}>
              <Typography>
                Buy No
              </Typography>
            </Grid>

            <Grid item>
              <Typography xs={6}>
                4c
              </Typography>
            </Grid>
          </Grid>
        </Grid>

      </CardContent>
      <CardActions>
        <Button size="small">
          Place Order
        </Button>
      </CardActions>
    </Card>
  );
}
