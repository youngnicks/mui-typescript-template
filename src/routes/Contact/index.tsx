import * as React from 'react';

import { createStyleSheet, withStyles } from 'material-ui/styles';

const styleSheet = createStyleSheet('ContactPage', (theme) => ({
  container: {
    padding: 15
  }
}));

type Props = {
  classes: typeof styleSheet
};

const Contact: React.StatelessComponent<Props> = ({classes}) => (
  <div className={classes.container}>Contact Page</div>
);

export default withStyles(styleSheet)(Contact);
