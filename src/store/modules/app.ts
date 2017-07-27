import * as constants from 'namespace-constants';

// Namespace
const namespace = 'App';

// Action types
const types = constants(namespace, [
  'CLOSE_DRAWER',
  'TOGGLE_DRAWER',
  'TOGGLE_THEME_SHADE'
]);

// Action creators
export const closeDrawer = () => ({type: types.CLOSE_DRAWER});
export const toggleDrawer = () => ({type: types.TOGGLE_DRAWER});
export const toggleShade = () => ({type: types.TOGGLE_THEME_SHADE});

// Reducers
const initialState = {
  dark: false,
  drawerOpen: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLOSE_DRAWER:
      return {
        ...state,
        drawerOpen: false
      };

    case types.TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      };

    case types.TOGGLE_THEME_SHADE:
      return {
        ...state,
        dark: !state.dark
      };

    default:
      return state;
  }
};
