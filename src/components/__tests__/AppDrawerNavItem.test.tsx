import * as React from 'react';

import AppDrawerNavItem from '../AppDrawerNavItem';
import { createShallow } from 'material-ui/test-utils';

describe('<AppDrawerNavItem/>', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<AppDrawerNavItem/>);
    expect(wrapper).toMatchSnapshot();
  });
});
