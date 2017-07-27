import * as React from 'react';

import MuiThemeProvider, { MUI_SHEET_ORDER } from 'material-ui/styles/MuiThemeProvider';

import AppFrame from './AppFrame';
import blue from 'material-ui/colors/blue';
import compose from 'recompose/compose';
import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import pink from 'material-ui/colors/pink';
import withApp from '../containers/App';
import { withRouter } from 'react-router';

type Props = {
  dark: boolean,
  location: {pathname: string}
};

let styleManager;

const App: React.StatelessComponent<Props> = (props) => {
  const { dark } = props;
  const palette = createPalette({
    primary: blue,
    accent: pink,
    type: dark ? 'dark' : 'light'
  });

  const theme = createMuiTheme({palette});

  if (!styleManager || !styleManager.updateTheme) {
    const themeContext = MuiThemeProvider.createDefaultContext({theme});
    styleManager = themeContext.styleManager;
  } else {
    styleManager.updateTheme(theme);
  }

  styleManager.setSheetOrder(
    MUI_SHEET_ORDER.concat([
      'Link',
      'AppContent',
      'AppDrawer',
      'AppDrawerNavItem',
      'AppFrame'
    ])
  );

  return (
    <MuiThemeProvider theme={theme} styleManager={styleManager}>
      <AppFrame pathname={props.location.pathname}/>
    </MuiThemeProvider>
  );
};

// withRouter must be first
export default compose(withRouter, withApp)(App);
