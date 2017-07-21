import * as React from 'react';

import AppDrawer from '../AppDrawer';
import { createShallow } from 'material-ui/test-utils';

describe('<AppDrawer/>', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<AppDrawer/>);
    expect(wrapper).toMatchSnapshot();
  });
});
