import * as React from 'react';

import { createStyleSheet, withStyles } from 'material-ui/styles';

const styleSheet = createStyleSheet('AboutPage', (theme) => ({
  container: {
    padding: 15
  }
}));

type Props = {
  classes: typeof styleSheet
};

const About: React.StatelessComponent<Props> = ({classes}) => (
  <div className={classes.container}>About Page</div>
);

export default withStyles(styleSheet)(About);
