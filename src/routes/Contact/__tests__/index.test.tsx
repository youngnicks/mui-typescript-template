import * as React from 'react';

import ContactIndex from '../index';
import { createShallow } from 'material-ui/test-utils';

describe('<Contact/>', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<ContactIndex/>);
    expect(wrapper).toMatchSnapshot();
  });
});
