import * as React from 'react';
import * as classNames from 'classnames';

import { createStyleSheet, withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import { Link } from 'react-router-dom';
import { ListItem } from 'material-ui/List';

const styleSheet = createStyleSheet('AppDrawerNavItem', theme => ({
  button: theme.mixins.gutters({
    borderRadius: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      textDecoration: 'none',
    }
  }),
  navItem: {
    ...theme.typography.body2,
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  navLink: {
    fontWeight: theme.typography.fontWeightRegular,
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  navLinkButton: {
    color: theme.palette.text.secondary,
    textIndent: 24,
    fontSize: 13
  },
  activeButton: {
    color: theme.palette.text.primary
  }
}));

type Props = {
  children?: React.ReactChildren,
  classes: typeof styleSheet,
  onClick: () => void,
  openImmediately?: boolean,
  title: string,
  to?: string
};

type State = {
  open: boolean
};

class AppDrawerNavItem extends React.Component<Props, State> {
  static defaultProps = {
    openImmediately: false
  };

  state = {
    open: false
  };

  componentWillMount() {
    if (this.props.openImmediately) {
      this.setState({open: true});
    }
  }

  handleClick = () => {
    this.setState(state => ({open: !state.open}));
  }

  render() {
    const { children, classes, title, to } = this.props;

    if (to) {
      return (
        <ListItem className={classes.navLink} disableGutters>
          <Button
            component={Link}
            to={to}
            className={classNames(classes.button, classes.navLinkButton)}
            disableRipple
            onClick={this.props.onClick}
          >
            {title}
          </Button>
        </ListItem>
      );
    }

    return (
      <ListItem className={classes.navItem} disableGutters>
        <Button className={classes.button} onClick={this.handleClick}>
          {title}
        </Button>

        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          {children}
        </Collapse>
      </ListItem>
    );
  }
}

export default withStyles(styleSheet)(AppDrawerNavItem);
