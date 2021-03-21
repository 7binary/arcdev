import React from 'react';
import Lottie from 'react-lottie';
import {
  Card,
  CardContent,
  Theme,
  Grid,
  Button,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';

// @ts-ignore
import animationData from '../../animations/landinganimation/data';
import ButtonArrow from '../ui/ButtonArrow';
import CallToAction from '../ui/CallToAction';

const customSoftwareIcon = require('../../assets/CustomSoftwareIcon.svg') as string;
const mobileAppIcon = require('../../assets/mobileIcon.svg') as string;
const websitesIcon = require('../../assets/websiteIcon.svg') as string;
const revolutionBackground = require('../../assets/repeatingBackground.svg') as string;
const infoBackground = require('../../assets/infoBackground.svg') as string;

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  technologyColumn: {
    width: '100%',
  },
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      width: '25em',
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  button: {
    borderRadius: 50,
    height: 45,
    width: 145,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
  },
  estimateButton: {
    ...theme.typography.estimate,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
  },
  learnButtonSmall: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    width: 'auto',
    marginLeft: 0,
    padding: 5,
  },
  learnButtonText: {
    marginRight: 10,
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.arcOrange,
  },
  icon: {
    marginLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '8rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      left: 0,
      right: 0,
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    className: classes.animation,
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*--- Technology block ---*/}
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid sm item className={classes.technologyColumn}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology<br/>to the Midwest
            </Typography>
            <Grid container justify="center" className={classes.buttonContainer}>
              <Grid item>
                <Button variant="contained"
                  className={`${classes.button} ${classes.estimateButton}`}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButton}>
                  <span className={classes.learnButtonText}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie
              options={defaultOptions}
              height={'100%'}
              width={'100%'}
            />
          </Grid>
        </Grid>
      </Grid>

      {/*--- Custom service block ---*/}
      <Grid item>
        <Grid container direction="row"
          justify={matchesSM ? 'center' : undefined}
          className={classes.serviceContainer}
        >
          <Grid item style={{
            marginLeft: matchesSM ? 0 : '4rem',
            textAlign: matchesSM ? 'center' : 'left',
          }}
          >
            <Typography variant="h4">
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigations to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButtonSmall}
            >
              <span className={classes.learnButtonText}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue}/>
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} src={customSoftwareIcon} alt="custom software icon"/>
          </Grid>
        </Grid>
      </Grid>

      {/*--- iOS/Android service block ---*/}
      <Grid item>
        <Grid container direction="row"
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
        >
          <Grid item style={{
            textAlign: matchesSM ? 'center' : 'left',
          }}
          >
            <Typography variant="h4">
              iOS/Android app development
            </Typography>
            <Typography variant="subtitle1">
              Extend Functionality. Extend Access. Extend Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web expirience or create a standalone app
              {matchesSM ? null : <br/>}
              with either mobile platform
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButtonSmall}
            >
              <span className={classes.learnButtonText}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue}/>
            </Button>
          </Grid>
          <Grid item style={{
            marginRight: matchesSM ? 0 : '4rem',
          }}
          >
            <img className={classes.icon} src={mobileAppIcon} alt="mobile phone icon"/>
          </Grid>
        </Grid>
      </Grid>

      {/*--- Websites service block ---*/}
      <Grid item>
        <Grid container direction="row"
          justify={matchesSM ? 'center' : undefined}
          className={classes.serviceContainer}
        >
          <Grid item style={{
            marginLeft: matchesSM ? 0 : '4rem',
            textAlign: matchesSM ? 'center' : 'left',
          }}
          >
            <Typography variant="h4">
              Website Development
            </Typography>
            <Typography variant="subtitle1">
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButtonSmall}
            >
              <span className={classes.learnButtonText}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue}/>
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} src={websitesIcon} alt="website icon"/>
          </Grid>
        </Grid>
      </Grid>

      {/*--- The Revolution block ---*/}
      <Grid item>
        <Grid container justify="center" alignItems="center" style={{
          height: '100em',
          marginTop: '12em',
        }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column" style={{ textAlign: 'center' }}>
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology
                    is a reciple for revolution.
                  </Typography>
                  <Button variant="outlined" className={classes.learnButtonSmall}>
                    <span className={classes.learnButtonText}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground}/>
        </Grid>
      </Grid>

      {/*--- The Information Block ---*/}
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ height: '80em' }}
        >
          <Grid
            item
            container
            justify="space-between"
            direction={matchesXS ? 'column' : 'row'}
            spacing={matchesXS ? 10 : 0}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              paddingLeft: matchesXS ? '2em' : '5em',
              paddingRight: matchesXS ? '2em' : '5em',
              textAlign: matchesXS ? 'center' : 'left',
            }}
          >
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: 'white' }}>About Us</Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonSmall}
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    <span className={classes.learnButtonText}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill="white"/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" alignItems={matchesXS ? undefined : 'flex-end'}>
                <Typography variant="h2" style={{ color: 'white' }}>Contact Us</Typography>
                <Typography variant="subtitle2">Say hello!</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonSmall}
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    <span className={classes.learnButtonText}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill="white"/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground}/>
        </Grid>
      </Grid>

      {/*--- The Call to action Block ---*/}
      <Grid item>
        <CallToAction/>
      </Grid>

    </Grid>
  );
}
