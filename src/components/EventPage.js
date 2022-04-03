import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Toolbar } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>

<Typography variant='h4'>
  COVID-19 case average in China
</Typography>

<Typography variant='subtitle1'>
  From Mar 30-Apr 5
</Typography>

<Toolbar />

<Item>
  <Grid container>
    <Grid item xs={8}>
      <Typography
        variant='h6'
      >
        >5500
      </Typography>
    </Grid>

    <Grid item xs={2}>
      <Typography
        variant='h6'
        color='darkGreen'
      >
        Buy Yes 25c
      </Typography>
    </Grid>

    <Grid item xs={2}>
      <Typography
        variant='h6'
        color='darkRed'
      >
        Buy Yes 79c
      </Typography>
    </Grid>
  </Grid>

</Item>

<Toolbar />

    <Typography
      variant='h6'
    >
      Last Traded Price
    </Typography>

<Item>

    <Typography
      variant='h6'
      color='darkGreen'
align='bottom'
    >
      Buy Yes 24c
    </Typography>

    <Typography
      variant='subititle2'
    >

      -10c (-43.5%),
      Vol. $4,387,
      Open int. $2,841,
      Closing in 2d
    </Typography>
</Item>

      </Grid>
</Grid>
    </Box>
  );
}
