import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Theme, Typography, useTheme } from '@material-ui/core';
import ButtonArrow from './ButtonArrow';

const background = require('../../assets/background.jpg') as string;
const backgroundMobile = require('../../assets/mobileBackground.jpg') as string;

const useStyles = makeStyles((theme: Theme) => ({
  learnButtonSmall: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    width: 'auto',
    marginLeft: 0,
    padding: 5,
  },
  learnButtonText: {
    marginRight: 5,
  },
  background: {
    height: '60em',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${backgroundMobile})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    marginRight: '5em',
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.arcOrange,
    fontSize: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default function CallToAction() {
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
    <Grid
      container
      className={classes.background}
      alignItems="center"
      justify="space-between"
    >
      <Grid item style={{ marginLeft: '5em' }}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.<br/>Revolutionary results
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21th century.
            </Typography>
            <Grid item>
              <Button
                variant="outlined"
                className={classes.learnButtonSmall}
              >
                <span className={classes.learnButtonText}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button variant="contained" className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
