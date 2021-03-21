import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  useMediaQuery,
  useScrollTrigger,
  IconButton,
  Button,
  SwipeableDrawer,
  Tab,
  Tabs,
  makeStyles,
  useTheme,
  Theme,
  Menu,
} from '@material-ui/core';

const logo = require('../../assets/logo.svg') as string;

const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3.4em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2.5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.8em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  tabs: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menuPaper: {
    backgroundColor: theme.palette.common.arcBlue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
    },
  },
  menuItemSelected: {
    opacity: 1,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.common.arcBlue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerItemEstimate: {
    backgroundColor: `${theme.palette.common.arcOrange}!important`,
  },
}));

interface HeaderTabsInterface {
  tabs: {title: string, link: string}[];
  tabSelected: number;
  setTabSelected: (tabSelected: number) => void;
  menuOptions: {title: string, link: string}[];
}

const ElevationScroll: React.FC = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  if (!React.isValidElement(children)) return null;

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const HeaderLogo = () => {
  const classes = useStyles();
  return (
    <Button
      component={Link}
      to="/"
      className={classes.logoContainer}
      disableRipple
    >
      <img src={logo} className={classes.logo} alt="Arc Development"/>
    </Button>
  );
};

const HeaderDrawer: React.FC<HeaderTabsInterface> = ({ tabs, tabSelected }) => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const classes = useStyles();
  const iOS = 'browser' in process && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <Toolbar disableGutters>
      <HeaderLogo/>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setDrawerOpened(!drawerOpened)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
      <SwipeableDrawer
        open={drawerOpened}
        onOpen={() => setDrawerOpened(true)}
        onClose={() => setDrawerOpened(false)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}/>
        <List disablePadding>
          {tabs.map((tab, index) => {
            const classNames = [classes.drawerItem];
            if (tab.link === '/estimate') classNames.push(classes.drawerItemEstimate);
            return (
              <ListItem
                key={tab.link}
                className={classNames.join(' ')}
                onClick={() => setDrawerOpened(false)}
                selected={tabSelected === index}
                classes={{ selected: classes.drawerItemSelected }}
                divider
                button
                component={Link}
                to={tab.link}
              >
                <ListItemText disableTypography>
                  {tab.title}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </Toolbar>
  );
};

const HeaderTabs: React.FC<HeaderTabsInterface> = ({ tabs, tabSelected, menuOptions }) => {
  const classes = useStyles();
  const [menuAnchor, setMenuAnchor] = useState<Element | null>(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();

  const handleOpenMenu = (e: MouseEvent) => {
    setMenuAnchor(e.currentTarget as Element);
    setMenuOpened(true);
  };

  const handleCloseMenu = () => {
    setMenuOpened(false);
    setMenuAnchor(null);
  };

  return (
    <Toolbar disableGutters>
      <HeaderLogo/>
      <Tabs className={classes.tabs} value={tabSelected} indicatorColor="primary">
        {tabs.map(tab => {
          let extraProps = {};
          if (tab.link === '/services') {
            extraProps = {
              'aria-owns': menuAnchor ? 'header-menu' : undefined,
              'aria-haspopup': menuAnchor ? 'true' : undefined,
              'onMouseOver': (event: any) => handleOpenMenu(event),
            };
          }
          return (
            <Tab
              key={tab.link}
              className={classes.tab}
              component={Link}
              to={tab.link}
              label={tab.title}
              selected={location.pathname === tab.link}
              {...extraProps}
            />
          );
        })}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        color="secondary"
        variant="contained"
        className={classes.button}
      >
        Free Estimate
      </Button>
      <Menu
        classes={{ paper: classes.menuPaper }}
        style={{ zIndex: 1310 }}
        id="header-menu"
        anchorEl={menuAnchor}
        onClose={() => handleCloseMenu()}
        open={menuOpened}
        MenuListProps={{ onMouseLeave: () => handleCloseMenu() }}
        elevation={0}
        getContentAnchorEl={null}
        keepMounted
      >
        {menuOptions.map((option) => (
          <MenuItem
            key={option.link}
            onClick={() => handleCloseMenu()}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem, selected: classes.menuItemSelected }}
            selected={location.pathname === option.link}
          >
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </Toolbar>
  );
};

const Header = () => {
  const theme: Theme = useTheme();
  const classes = useStyles();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [tabSelected, setTabSelected] = useState(0);

  const tabs = [
    { title: 'Home', link: '/' },
    { title: 'Services', link: '/services' },
    { title: 'The Revolution', link: '/revolution' },
    { title: 'About Us', link: '/about' },
    { title: 'Contact Us', link: '/contact' },
    { title: 'Free Estimate', link: '/estimate' },
  ];

  const menuOptions = [
    { title: 'Services', link: '/services' },
    { title: 'Custom Software development', link: '/custom-software' },
    { title: 'iOS/Android App development', link: '/mobile-apps' },
    { title: 'Website development', link: '/websites' },
  ];

  useEffect(() => {
    const tabIndex = tabs.map(tab => tab.link).indexOf(location.pathname);
    const menuIndex = menuOptions.map(menu => menu.link).indexOf(location.pathname);
    if (tabIndex >= 0 && tabSelected !== tabIndex) setTabSelected(tabIndex);
    if (menuIndex >= 0) setTabSelected(1);
  }, [location]);

  const props = { tabs, tabSelected, setTabSelected, menuOptions };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          {isMdScreen ? (
            <HeaderDrawer {...props}/>
          ) : (
            <HeaderTabs {...props} tabs={tabs.filter(tab => tab.link !== '/estimate')}/>
          )}
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </>
  );
};

export default Header;
