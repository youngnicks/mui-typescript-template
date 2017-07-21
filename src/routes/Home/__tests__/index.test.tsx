import * as React from 'react';

import HomeIndex from '../index';
import { createShallow } from 'material-ui/test-utils';

describe('<Home/>', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<HomeIndex/>);
    expect(wrapper).toMatchSnapshot();
  });
});
