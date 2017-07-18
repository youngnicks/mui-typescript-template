import * as React from 'react';

import MuiThemeProvider, { MUI_SHEET_ORDER } from 'material-ui/styles/MuiThemeProvider';

import AppFrame from './AppFrame';
import blue from 'material-ui/colors/blue';
import { connect } from 'react-redux';
import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import pink from 'material-ui/colors/pink';
import { withRouter } from 'react-router-dom';

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

  if (!styleManager) {
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

export default withRouter(connect((state) => ({dark: state.dark}))(App));
