import * as React from 'react';

import NotFound from '../NotFound';
import { createShallow } from 'material-ui/test-utils';

describe('<NotFound/>', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<NotFound/>);
    expect(wrapper).toMatchSnapshot();
  });
});
