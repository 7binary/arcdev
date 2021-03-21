import React from 'react';
import { Theme, Grid, Hidden, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const footerBg = require('../../assets/footer_bg.svg') as string;
const twitterImg = require('../../assets/twitter.svg') as string;
const instagramImg = require('../../assets/instagram.svg') as string;
const facebookImg = require('../../assets/facebook.svg') as string;

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    width: '100%',
    backgroundColor: theme.palette.common.arcBlue,
    zIndex: theme.zIndex.modal + 1,
    position: 'relative',
  },
  footerBg: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  footerContainer: {
    position: 'absolute',
  },
  link: {
    fontSize: '0.75rem',
    font: 'Arial',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  socialIcon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-5.5em',
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginTop: '-4em',
    }
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.footerContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/">Home</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/services">Services</Grid>
              <Grid item className={classes.link} component={Link} to="/custom-software">Custom Software
                Development</Grid>
              <Grid item className={classes.link} component={Link} to="/mobile-apps">iOS/Android App Development</Grid>
              <Grid item className={classes.link} component={Link} to="/websites">Website Development</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/revolution">The Revolution</Grid>
              <Grid item className={classes.link} component={Link} to="/revolution">Vision</Grid>
              <Grid item className={classes.link} component={Link} to="/revolution">Technology</Grid>
              <Grid item className={classes.link} component={Link} to="/revolution">Process</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/about">About Us</Grid>
              <Grid item className={classes.link} component={Link} to="/about">History</Grid>
              <Grid item className={classes.link} component={Link} to="/about">Team</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/contact">Contact Us</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img src={footerBg} className={classes.footerBg} alt="footer backslash"/>

      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component="a" href="https://twitter.com" rel="noopener noreferrer" target="_blank">
          <img src={twitterImg} alt="twitter logo" className={classes.socialIcon}/>
        </Grid>
        <Grid item component="a" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
          <img src={instagramImg} alt="instagram logo" className={classes.socialIcon}/>
        </Grid>
        <Grid item component="a" href="https://facebook.com" rel="noopener noreferrer" target="_blank">
          <img src={facebookImg} alt="facebook logo" className={classes.socialIcon}/>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
