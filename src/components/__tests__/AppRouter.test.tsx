import * as React from 'react';

import AppRouter from '../AppRouter';
import { createShallow } from 'material-ui/test-utils';

describe('<AppRouter/>', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const routes = [];
    const wrapper = shallow(<AppRouter routes={routes}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
