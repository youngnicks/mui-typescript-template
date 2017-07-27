import * as React from 'react';

import { closeDrawer, toggleDrawer, toggleShade } from '../store/modules/app';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { find, get } from 'lodash';
import routes, { flattenedRoutes } from '../routes';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';

import AppBar from 'material-ui/AppBar';
import AppDrawer from './AppDrawer';
import AppRouter from './AppRouter';
import { Dispatch } from 'redux';
import IconButton from 'material-ui/IconButton';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import compose from 'recompose/compose';
import withApp from '../containers/App';

const styleSheet = createStyleSheet('AppFrame', (theme) => ({
  '@global': {
    html: {
      boxSizing: 'border-box'
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit'
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale' // Antialiasing.
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto'
    },
  },
  appFrame: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%'
  },
  grow: {
    flex: '1 1 auto'
  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto'
  },
  appBar: {
    transition: theme.transitions.create('width')
  },
  main: {
    marginTop: 64
  },
  [theme.breakpoints.up('lg')]: {
    drawer: {
      width: '250px'
    },
    title: {
      marginLeft: 0
    },
    appBarShift: {
      width: 'calc(100% - 250px)'
    },
    navIconHide: {
      display: 'none'
    },
    main: {
      width: 'calc(100% - 250px)'
    }
  }
}));

type Props = {
  children: React.ReactNode,
  classes: typeof styleSheet,
  dispatch: Dispatch<void>,
  drawerOpen: boolean,
  pathname: string,
  width: string,

  closeDrawer: typeof closeDrawer,
  toggleDrawer: typeof toggleDrawer,
  toggleShade: typeof toggleShade
};

type State = {
  drawerOpen: boolean
};

class AppFrame extends React.Component<Props, State> {
  getTitle() {
    return get(find(flattenedRoutes, {path: this.props.pathname}), 'title');
  }

  render() {
    const { classes, width } = this.props;
    const title = this.getTitle();

    let drawerDocked = isWidthUp('lg', width);
    let navIconClassName = classes.icon;
    let appBarClassName = classes.appBar;

    if (!!title) {
      navIconClassName += ` ${classes.navIconHide}`;
      appBarClassName += ` ${classes.appBarShift}`;
    } else {
      // Home route, don't shift app bar or dock drawer
      drawerDocked = false;
    }

    return (
      <div className={classes.appFrame}>
        <AppBar className={appBarClassName}>
          <Toolbar>
            <IconButton
              color="contrast"
              onClick={this.props.toggleDrawer}
              className={navIconClassName}
            >
              <MenuIcon/>
            </IconButton>

            {title !== null && (
              <Typography className={classes.title} type="title" color="inherit" noWrap>
                {title}
              </Typography>
            )}

            <div className={classes.grow}/>

            <IconButton
              title="Toggle light/dark theme"
              color="contrast"
              onClick={this.props.toggleShade}
            >
              <LightbulbOutline/>
            </IconButton>
          </Toolbar>
        </AppBar>

        <AppDrawer
          className={classes.drawer}
          docked={drawerDocked}
          routes={routes}
          onRequestClose={this.props.closeDrawer}
          open={drawerDocked || this.props.drawerOpen}
        />

        <main className={classes.main}>
          <AppRouter routes={routes}/>
        </main>
      </div>
    );
  }
}

export default compose(withApp, withStyles(styleSheet), withWidth())(AppFrame);
