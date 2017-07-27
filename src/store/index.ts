import { filter, map, mapValues } from 'lodash';

import activeModules from './activeModules';
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import  configureStore from './configureStore';

// Extract epics from active modules and combine into root epic.
const epics = map(filter(activeModules, 'epic'), 'epic');
export const rootEpic = combineEpics(...epics);

// Extract reducers from active modules and combine into root reducer.
const reducers = mapValues(activeModules, module => module.reducer);
export const rootReducer = combineReducers(reducers);

// Export configureStore as default as it bootstraps the store.
export default configureStore(rootEpic, rootReducer);
