import * as React from 'react';

import { closeDrawer, toggleDrawer, toggleShade } from '../store/modules/app';

import { connect } from 'react-redux';

// Map redux state to props
const mapStateToProps = (state) => ({...state.app});

// Wrap actions with store dispatch
const actionsToDispatch = {
  closeDrawer,
  toggleDrawer,
  toggleShade
};

export const withApp = (WrappedComponent) => {
  class AppContainer extends React.Component<{}> {
    render() {
      return (
        <WrappedComponent {...this.props}/>
      );
    }
  }

  return connect(mapStateToProps, actionsToDispatch)(AppContainer);
};

export default withApp;
