import * as React from 'react';

import { createStyleSheet, withStyles } from 'material-ui/styles';

import AppDrawerNavItem from './AppDrawerNavItem';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Link from './Link';
import List from 'material-ui/List';
import { Route } from '../routes';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('AppDrawer', theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper
  },
  title: {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary[500]
    }
  },
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  anchor: {
    color: theme.palette.text.secondary
  }
}));

type Props = {
  classes: typeof styleSheet,
  className?: string,
  docked: boolean,
  onRequestClose: () => void,
  open: boolean,
  routes: Route[]
};

function renderNavItems(props: Props, navRoot: Route) {
  let navItems;

  if (navRoot.childRoutes && navRoot.childRoutes.length) {
    navItems = navRoot.childRoutes.reduce(reduceChildRoutes.bind(null, props), []);
  }

  return (
    <List key={navRoot}>
      {navItems}
    </List>
  );
}

function reduceChildRoutes(props: Props, items: React.ReactNode[], childRoute: Route, index: number) {
  if (childRoute.title) {
    if (childRoute.childRoutes && childRoute.childRoutes.length) {
      const openImmediately = props.routes.indexOf(childRoute) !== -1 || false;
      items.push(
        <AppDrawerNavItem key={childRoute.path} openImmediately={openImmediately} title={childRoute.title}>
          {renderNavItems(props, childRoute)}
        </AppDrawerNavItem>
      );
    } else {
      items.push(
        <AppDrawerNavItem
          key={index}
          title={childRoute.title}
          to={childRoute.path}
          onClick={props.onRequestClose}
        />
      );
    }
  }
  return items;
}

const AppDrawer: React.StatelessComponent<Props> = (props) => {
  const { classes } = props;

  return (
    <Drawer
      className={props.className}
      classes={{
        paper: classes.paper
      }}
      open={props.open}
      onRequestClose={props.onRequestClose}
      docked={props.docked}
      keepMounted
    >
      <div className={classes.nav}>
        <Toolbar className={classes.toolbar}>
          <Link className={classes.title} to="/" onClick={props.onRequestClose}>
            <Typography type="title" color="inherit" gutterBottom>
              Material-UI App
            </Typography>
            <Typography type="caption">With TypeScript</Typography>
          </Link>

          <Divider absolute/>
        </Toolbar>

        {renderNavItems(props, {childRoutes: props.routes})}
      </div>
    </Drawer>
  );
};

export default withStyles(styleSheet)(AppDrawer);
