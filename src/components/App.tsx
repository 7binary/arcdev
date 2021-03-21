import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider, makeStyles, Theme, CssBaseline } from '@material-ui/core';

// @ts-ignore
import theme from './ui/theme';
import Header from './ui/Header';
import Footer from './ui/Footer';

import LandingPage from './pages/LandingPage';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline/>

        <div className={classes.content}>
          <Header/>
          <Switch>
            <Route exact path="/">
              <LandingPage/>
            </Route>
            <Route exact path="/services" component={() => (<div>Services</div>)}/>
            <Route exact path="/custom-software" component={() => (<div>custom-software</div>)}/>
            <Route exact path="/mobile-apps" component={() => (<div>mobileapps</div>)}/>
            <Route exact path="/websites" component={() => (<div>websites</div>)}/>
            <Route exact path="/revolution" component={() => (<div>revolution</div>)}/>
            <Route exact path="/about" component={() => (<div>about</div>)}/>
            <Route exact path="/contact" component={() => (<div>contact</div>)}/>
            <Route exact path="/estimate" component={() => (<div>estimate</div>)}/>
          </Switch>
        </div>

        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
