import * as React from 'react';
import * as classNames from 'classnames';

import { createStyleSheet, withStyles } from 'material-ui/styles';

import { Link as LinkRouter } from 'react-router-dom';

const styleSheet = createStyleSheet('Link', (theme) => ({
  root: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  primary: {
    color: theme.palette.primary[500],
  },
  accent: {
    color: theme.palette.accent.A400,
  },
}));

type Props = {
  component?: React.Component,
  classes: typeof styleSheet,
  className: string,
  variant: string,
  to?: string
};

const Link: React.StatelessComponent<Props> = (props) => {
  const {component: ComponentProp, classes, className, variant, to, ...other} = props;

  let Component;

  if (ComponentProp) {
    Component = ComponentProp;
  } else if (to) {
    Component = LinkRouter;
  } else {
    Component = 'a';
  }

  return (
    <Component
      to={to}
      className={classNames(
        classes.root,
        {
          [classes.primary]: variant === 'primary',
          [classes.accent]: variant === 'accent'
        },
        className
      )}
      {...other}
    />
  );
};

export default withStyles(styleSheet)(Link);
